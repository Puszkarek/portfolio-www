import { isPlatformBrowser } from "@angular/common";
import type { AfterViewInit } from "@angular/core";
import { Component, ElementRef, HostBinding, NgZone, PLATFORM_ID, afterRenderEffect, contentChild, effect, inject, viewChild } from "@angular/core";
import type { Observable } from "rxjs";
import { fromEvent, of, switchMap, takeUntil, tap } from "rxjs";
import { ActionDirective } from "../../directives/action.directive";
import { IconComponent } from "../icon/icon.component";
import { ScrollableViewportComponent } from "../scrollable-viewport/scrollable-viewport.component";

declare global {
  // @ts-ignore
  class ScrollTimeline extends AnimationTimeline {
    constructor(options: { source: HTMLElement; axis: "y" | "x" });
  }
}

const startAnimation = (thumb: HTMLElement, viewport: HTMLElement): Animation => {
  return thumb.animate(
    {
      translate: ["var(--scrollbar-thumb-transform-from)", "var(--scrollbar-thumb-transform-to)"],
    },
    {
      fill: "both",
      easing: "linear",
      timeline: new ScrollTimeline({ source: viewport, axis: "y" }),
    },
  );
};

@Component({
  selector: "app-scrollable-container",
  imports: [IconComponent, ActionDirective],
  templateUrl: "./scrollable-container.component.html",
  styleUrl: "./scrollable-container.component.scss",
})
export class ScrollableContainerComponent implements AfterViewInit {
  private readonly _zone = inject(NgZone);
  private readonly _platformId = inject(PLATFORM_ID);

  @HostBinding("style.--track-height")
  public trackSize = 0;

  @HostBinding("style.--viewport-height")
  public viewportSize = 0;

  @HostBinding("style.--content-height")
  public contentSize = 0;

  public readonly viewport = contentChild(ScrollableViewportComponent);
  public readonly scrollThumb = viewChild("scrollThumb", { read: ElementRef });
  public readonly scrollTrack = viewChild("scrollTrack", { read: ElementRef });

  public readonly scrollUp = (): void => {
    this.viewport()?.hostElement.nativeElement.scrollBy({ top: -100, left: 0, behavior: "smooth" });
  };

  public readonly scrollDown = (): void => {
    this.viewport()?.hostElement.nativeElement.scrollBy({ top: 100, left: 0, behavior: "smooth" });
  };

  constructor() {
    afterRenderEffect(() => {
      const thumbElement = this.scrollThumb()?.nativeElement as HTMLElement;
      const viewportElement = this.viewport()?.hostElement.nativeElement;
      if (!thumbElement || !viewportElement) return;

      startAnimation(thumbElement, viewportElement);
    });

    // Content Size
    effect(() => {
      const viewport = this.viewport()?.hostElement.nativeElement;
      if (!viewport) return;
      const contentSize = viewport.scrollHeight;

      this.contentSize = contentSize;
    });

    // Viewport Size
    effect(() => {
      const viewport = this.viewport()?.hostElement.nativeElement;
      if (!viewport) return;
      const viewportSize = viewport.offsetHeight;
      this.viewportSize = viewportSize;
    });

    // Track Size
    effect(() => {
      const scrollTrack = this.scrollTrack()?.nativeElement as HTMLElement;
      if (!scrollTrack) return;

      const trackSize = scrollTrack.offsetHeight;
      this.trackSize = trackSize;
    });
  }

  public ngAfterViewInit(): void {
    if (!isPlatformBrowser(this._platformId)) return;

    this._zone.runOutsideAngular(() => {
      console.log("ScrollableContainerComponent.afterViewInit");
      this._listenPointerEvents().subscribe();
    });
  }

  private _listenPointerEvents(): Observable<unknown> {
    const thumbElement = this.scrollThumb()?.nativeElement as HTMLElement;
    const trackElement = this.scrollTrack()?.nativeElement as HTMLElement;
    const viewportElement = this.viewport()?.hostElement.nativeElement;

    if (!thumbElement || !viewportElement || !trackElement) {
      return of(null);
    }

    return fromEvent<PointerEvent>(thumbElement, "pointerdown").pipe(
      switchMap((downEvent) => {
        downEvent.preventDefault();
        downEvent.stopImmediatePropagation();
        const startY = downEvent.offsetY;
        thumbElement.setPointerCapture(downEvent.pointerId);

        // Create a subject that will complete when pointerup happens
        const pointerUp$ = fromEvent<PointerEvent>(document, "pointerup").pipe(
          tap((upEvent) => {
            thumbElement.releasePointerCapture(upEvent.pointerId);
          }),
        );

        // Return the pointermove stream that will complete on pointerup
        return fromEvent<PointerEvent>(document, "pointermove").pipe(
          tap((moveEvent) => {
            moveEvent.preventDefault();
            moveEvent.stopImmediatePropagation();

            // Get track bounds
            const trackRect = trackElement.getBoundingClientRect();

            // Calculate position relative to track
            const trackRelativePosition = moveEvent.clientY - trackRect.top;

            // Calculate the ratio of the track position to the scroll range
            const scrollableRange = viewportElement.scrollHeight - viewportElement.clientHeight;
            const trackRange = trackRect.height - thumbElement.offsetHeight;

            // Calculate percentage of track and apply to scrollable range
            const scrollPercentage = Math.max(0, Math.min(1, (trackRelativePosition - startY) / trackRange));
            const scrollPosition = scrollPercentage * scrollableRange;

            // Update scroll position
            viewportElement.scrollTop = scrollPosition;
          }),
          takeUntil(pointerUp$),
        );
      }),
    );
  }
}
