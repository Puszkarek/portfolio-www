import { Component, inject } from "@angular/core";
import { ModalHeaderComponent } from "../../components/modal-header/modal-header.component";
import { ModalReference } from "../../libs/modal/services/modal-reference.service";
import { ScrollableContainerComponent } from "../../components/scrollable-container/scrollable-container.component";
import { ScrollableViewportComponent } from "../../components/scrollable-viewport/scrollable-viewport.component";

@Component({
  selector: "app-full-stack-projects-modal",
  imports: [ModalHeaderComponent, ScrollableViewportComponent, ScrollableContainerComponent],
  templateUrl: "./full-stack-projects-modal.component.html",
  styleUrl: "./full-stack-projects-modal.component.scss",
})
export class FullStackProjectsModalComponent {
  public readonly modalReference = inject(ModalReference);
}
