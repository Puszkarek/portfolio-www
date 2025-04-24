import { Component } from "@angular/core";
import { ElementRef, inject, signal } from "@angular/core";
import type { OnDestroy } from "@angular/core";

export type ScrollPosition = {
  clientHeight: number;
  scrollHeight: number;
  scrollTop: number;
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
    clientHeight: 0,
    scrollHeight: 0,
    scrollTop: 0,
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
    const { scrollTop, scrollHeight, clientHeight } = this.hostElement.nativeElement;

    this._scrollPosition.set({
      clientHeight,
      scrollHeight,
      scrollTop,
    });
  };
}
