import { Component, output } from "@angular/core";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "app-modal-header",
  imports: [IconComponent],
  templateUrl: "./modal-header.component.html",
  styleUrl: "./modal-header.component.scss",
})
export class ModalHeaderComponent {
  public readonly close = output();
  public readonly maximize = output();
}
