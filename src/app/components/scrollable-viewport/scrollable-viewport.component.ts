import { Component } from "@angular/core";
import { ElementRef, inject, signal } from "@angular/core";
import type { OnDestroy } from "@angular/core";

export type ScrollPosition = {
  scrollXPercent: number;
  scrollYPercent: number;
};

@Component({
  selector: "app-scrollable-viewport",
  imports: [],
  template: "<ng-content/>",
  styles: [
    `
      :host {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
      }
      :host::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    `,
  ],
})
export class ScrollableViewportComponent implements OnDestroy {
  public readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

  private readonly _scrollPosition = signal<ScrollPosition>({
    scrollYPercent: 0,
    scrollXPercent: 0,
  });
  public readonly scrollPosition = this._scrollPosition.asReadonly();

  constructor() {
    this._checkScrollPosition();

    this.hostElement.nativeElement.addEventListener("scroll", this._checkScrollPosition);
  }

  public ngOnDestroy(): void {
    this.hostElement.nativeElement.removeEventListener("scroll", this._checkScrollPosition);
  }

  private readonly _checkScrollPosition = (): void => {
    const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = this.hostElement.nativeElement;

    const scrollXPercent = this._getScrollXPercent(scrollLeft, scrollWidth, clientWidth);
    const scrollYPercent = this._getScrollYPercent(scrollTop, scrollHeight, clientHeight);

    this._scrollPosition.set({
      scrollYPercent: Math.round(scrollYPercent),
      scrollXPercent: Math.round(scrollXPercent),
    });
  };

  private readonly _getScrollYPercent = (scrollTop: number, scrollHeight: number, clientHeight: number): number => {
    if (scrollTop === 0) {
      return 0;
    }

    return Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
  };

  private readonly _getScrollXPercent = (scrollLeft: number, scrollWidth: number, clientWidth: number): number => {
    if (scrollLeft === 0) {
      return 0;
    }

    return Math.round((scrollLeft / (scrollWidth - clientWidth)) * 100);
  };
}
