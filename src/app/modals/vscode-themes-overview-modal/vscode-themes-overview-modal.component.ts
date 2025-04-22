import { Component, inject } from "@angular/core";
import { ModalHeaderComponent } from "../../components/modal-header/modal-header.component";
import { ModalReference } from "../../libs/modal/services/modal-reference.service";

@Component({
  selector: "app-vscode-themes-overview-modal",
  imports: [ModalHeaderComponent],
  templateUrl: "./vscode-themes-overview-modal.component.html",
  styleUrl: "./vscode-themes-overview-modal.component.scss",
})
export class VSCodeThemesOverviewModalComponent {
  public readonly modalReference = inject(ModalReference);
}
