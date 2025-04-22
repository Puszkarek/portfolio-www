import { Component, inject } from "@angular/core";
import { PageContainerComponent } from "../../components/page-container/page-container.component";
import { trackAction } from "../../helpers/track-action";
import type { TrackableAction } from "../../helpers/track-action";
import { ModalService } from "../../libs/modal/services/modal.service";

type DesktopItem = {
  label: string;
  icon: string;
  position: { x: number; y: number };
  action: TrackableAction<() => Promise<void>>;
};

@Component({
  selector: "app-desktop-page",
  imports: [PageContainerComponent],
  templateUrl: "./desktop-page.component.html",
  styleUrl: "./desktop-page.component.scss",
})
export default class DesktopPageComponent {
  private readonly _modalService = inject(ModalService);

  public readonly items: ReadonlyArray<DesktopItem> = [
    {
      label: "VS Code Themes",
      icon: "folder",
      position: { x: 1, y: 1 },
      action: trackAction(async () => {
        const component = await import("../../modals/vscode-themes-overview-modal/vscode-themes-overview-modal.component");

        this._modalService.open(component.VSCodeThemesOverviewModalComponent);
      }),
    },
    {
      label: "Full-Stack",
      icon: "computer",
      position: { x: 1, y: 2 },
      action: trackAction(async () => {
        const component = await import("../../modals/vscode-themes-overview-modal/vscode-themes-overview-modal.component");

        this._modalService.open(component.VSCodeThemesOverviewModalComponent);
      }),
    },
    {
      label: "Rust",
      icon: "drive",
      position: { x: -2, y: -2 },
      action: trackAction(async () => {
        const component = await import("../../modals/vscode-themes-overview-modal/vscode-themes-overview-modal.component");

        this._modalService.open(component.VSCodeThemesOverviewModalComponent);
      }),
    },
  ];
}
