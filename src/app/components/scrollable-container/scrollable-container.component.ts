import { Component, contentChild, signal } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { ActionDirective } from "../../directives/action.directive";
import { ScrollableViewportComponent } from "../scrollable-viewport/scrollable-viewport.component";

@Component({
  selector: "app-scrollable-container",
  imports: [IconComponent, ActionDirective],
  templateUrl: "./scrollable-container.component.html",
  styleUrl: "./scrollable-container.component.scss",
})
export class ScrollableContainerComponent {
  public readonly viewport = contentChild(ScrollableViewportComponent);

  public readonly scrollUp = (): void => {
    this.viewport()?.hostElement.nativeElement.scrollBy({ top: -100, left: 0, behavior: "smooth" });
  };
  public readonly scrollDown = (): void => {
    this.viewport()?.hostElement.nativeElement.scrollBy({ top: 100, left: 0, behavior: "smooth" });
  };
}
