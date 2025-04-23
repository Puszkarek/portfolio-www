import { Directive, ElementRef, HostBinding, effect, inject, input } from "@angular/core";

import type { ActionStyle } from "../types/action";

@Directive({
  selector: "[appAction]",
  host: {
    class: "parsedStyle()",
  },
  standalone: true,
})
export class ActionDirective {
  private readonly _elementReference = inject<ElementRef<HTMLElement>>(ElementRef);
  public readonly style = input.required<ActionStyle>({ alias: "appAction" });

  @HostBinding("class")
  public className = "";

  @HostBinding("class.app-action-loading")
  public hasLoadingClass = false;

  public readonly isLoading = input<boolean>(false);

  constructor() {
    // Add base class
    this._elementReference.nativeElement.classList.add("app-action");

    effect(() => {
      this.className = `app-action-${this.style()}`;
    });

    effect(() => {
      this.hasLoadingClass = this.isLoading();
    });
  }
}
