import { Component, output } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { ActionDirective } from "../../directives/action.directive";

@Component({
  selector: "app-modal-header",
  imports: [IconComponent, ActionDirective],
  templateUrl: "./modal-header.component.html",
  styleUrl: "./modal-header.component.scss",
})
export class ModalHeaderComponent {
  public readonly close = output();
}
