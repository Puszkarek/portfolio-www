import { Component, inject } from "@angular/core";
import { ModalHeaderComponent } from "../../components/modal-header/modal-header.component";
import { ModalReference } from "../../libs/modal/services/modal-reference.service";
import { ActionDirective } from "../../directives/action.directive";

@Component({
  selector: "app-vscode-themes-overview-modal",
  imports: [ModalHeaderComponent, ActionDirective],
  templateUrl: "./vscode-themes-overview-modal.component.html",
  styleUrl: "./vscode-themes-overview-modal.component.scss",
})
export class VSCodeThemesOverviewModalComponent {
  public readonly modalReference = inject(ModalReference);

  public readonly themes = [
    {
      name: "WIITY Theme",
      subtitle: "What if I told you... your code editor could look like this?",
      description: "A Matrix-inspired theme that transforms your coding environment into a digital realm with a green terminal aesthetic.",
      features: ["Authentic terminal green primary color scheme", "Dark background for hacker aesthetic", "Carefully selected syntax highlighting", "Custom UI elements"],
      marketplace: "https://marketplace.visualstudio.com/items?itemName=Puszkarek.wiity-theme",
      image: "assets/wiity-theme-preview.png",
    },
    {
      name: "Midnight Mirage",
      subtitle: "Code under the moonlight.",
      description: "A theme designed to tap into your inner creativity during those late-night coding sessions.",
      features: ["Sleek and stylish design elements", "Clean and elegant color scheme", "Optimal for reducing eye strain at night"],
      marketplace: "https://marketplace.visualstudio.com/items?itemName=Puszkarek.midnight-mirage-theme",
      image: "assets/midnight-mirage-preview.png",
    },
  ];
}
