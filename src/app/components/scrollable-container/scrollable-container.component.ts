import { Component, contentChild, computed, inject, ElementRef, effect, afterRenderEffect, viewChild, HostBinding } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { ActionDirective } from "../../directives/action.directive";
import { ScrollableViewportComponent } from "../scrollable-viewport/scrollable-viewport.component";

declare global {
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
export class ScrollableContainerComponent {
  @HostBinding("style.--track-height")
  public trackSize = 0;

  @HostBinding("style.--viewport-height")
  public viewportSize = 0;

  @HostBinding("style.--content-height")
  public contentSize = 0;

  private readonly _hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
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
      console.log(thumbElement, viewportElement);
      if (!thumbElement || !viewportElement) return;

      startAnimation(thumbElement, viewportElement);
    });

    // Content Size
    effect(() => {
      const viewport = this.viewport()?.hostElement.nativeElement;
      if (!viewport) return;
      const contentSize = viewport.scrollHeight;

      console.log({ contentSize });
      this.contentSize = contentSize;
    });

    // Viewport Size
    effect(() => {
      const viewport = this.viewport()?.hostElement.nativeElement;
      if (!viewport) return;
      const viewportSize = viewport.offsetHeight;
      console.log({ viewportSize });
      this.viewportSize = viewportSize;
    });

    // Track Size
    effect(() => {
      const scrollTrack = this.scrollTrack()?.nativeElement as HTMLElement;
      if (!scrollTrack) return;

      const trackSize = scrollTrack.offsetHeight;
      console.log(trackSize);
      this.trackSize = trackSize;
    });
  }
}
