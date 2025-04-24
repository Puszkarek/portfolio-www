import { Component, inject } from "@angular/core";
import { ModalHeaderComponent } from "../../components/modal-header/modal-header.component";
import { ModalReference } from "../../libs/modal/services/modal-reference.service";
import { ActionDirective } from "../../directives/action.directive";
import { ScrollableContainerComponent } from "../../components/scrollable-container/scrollable-container.component";
import { ScrollableViewportComponent } from "../../components/scrollable-viewport/scrollable-viewport.component";

type Theme = {
  name: string;
  subtitle: string;
  description: string;
  imageURL: string;

  links: {
    github: string;
    marketplace: string;
  };
};

@Component({
  selector: "app-vscode-themes-overview-modal",
  imports: [ModalHeaderComponent, ScrollableViewportComponent, ScrollableContainerComponent, ActionDirective],
  templateUrl: "./vscode-themes-overview-modal.component.html",
  styleUrl: "./vscode-themes-overview-modal.component.scss",
})
export class VSCodeThemesOverviewModalComponent {
  public readonly modalReference = inject(ModalReference);

  public readonly themes: ReadonlyArray<Theme> = [
    {
      name: "WIITY Theme",
      subtitle: "What if I told you... your code editor could look like this?",
      description: "A Matrix-inspired theme that transforms your coding environment into a digital realm with a green terminal aesthetic.",
      links: {
        marketplace: "https://marketplace.visualstudio.com/items?itemName=puszkarek.wiity-vscode-theme",
        github: "https://github.com/Puszkarek/wiity-vscode-theme",
      },
      imageURL: "https://raw.githubusercontent.com/Puszkarek/wiity-vscode-theme/refs/heads/master/assets/syntax-example.png",
    },
    {
      name: "Midnight Mirage",
      subtitle: "Code under the moonlight.",
      description: "A theme designed to tap into your inner creativity during those late-night coding sessions.",
      links: {
        marketplace: "https://marketplace.visualstudio.com/items?itemName=Puszkarek.midnight-mirage-theme",
        github: "https://github.com/Puszkarek/midnight-mirage-theme-vscode",
      },
      imageURL: "https://raw.githubusercontent.com/Puszkarek/midnight-mirage-theme-vscode/refs/heads/main/assets/syntax-example.png",
    },
    {
      name: "WIITY Them323e",
      subtitle: "What if I told you... your code editor could look like this?",
      description: "A Matrix-inspired theme that transforms your coding environment into a digital realm with a green terminal aesthetic.",
      links: {
        marketplace: "https://marketplace.visualstudio.com/items?itemName=puszkarek.wiity-vscode-theme",
        github: "https://github.com/Puszkarek/wiity-vscode-theme",
      },
      imageURL: "https://raw.githubusercontent.com/Puszkarek/wiity-vscode-theme/refs/heads/master/assets/syntax-example.png",
    },
    {
      name: "Midnight 555",
      subtitle: "Code under the moonlight.",
      description: "A theme designed to tap into your inner creativity during those late-night coding sessions.",
      links: {
        marketplace: "https://marketplace.visualstudio.com/items?itemName=Puszkarek.midnight-mirage-theme",
        github: "https://github.com/Puszkarek/midnight-mirage-theme-vscode",
      },
      imageURL: "https://raw.githubusercontent.com/Puszkarek/midnight-mirage-theme-vscode/refs/heads/main/assets/syntax-example.png",
    },
    {
      name: "WIITY 12321",
      subtitle: "What if I told you... your code editor could look like this?",
      description: "A Matrix-inspired theme that transforms your coding environment into a digital realm with a green terminal aesthetic.",
      links: {
        marketplace: "https://marketplace.visualstudio.com/items?itemName=puszkarek.wiity-vscode-theme",
        github: "https://github.com/Puszkarek/wiity-vscode-theme",
      },
      imageURL: "https://raw.githubusercontent.com/Puszkarek/wiity-vscode-theme/refs/heads/master/assets/syntax-example.png",
    },
    {
      name: "Midnight Mirage32",
      subtitle: "Code under the moonlight.",
      description: "A theme designed to tap into your inner creativity during those late-night coding sessions.",
      links: {
        marketplace: "https://marketplace.visualstudio.com/items?itemName=Puszkarek.midnight-mirage-theme",
        github: "https://github.com/Puszkarek/midnight-mirage-theme-vscode",
      },
      imageURL: "https://raw.githubusercontent.com/Puszkarek/midnight-mirage-theme-vscode/refs/heads/main/assets/syntax-example.png",
    },
    {
      name: "WIITY Theme2332",
      subtitle: "What if I told you... your code editor could look like this?",
      description: "A Matrix-inspired theme that transforms your coding environment into a digital realm with a green terminal aesthetic.",
      links: {
        marketplace: "https://marketplace.visualstudio.com/items?itemName=puszkarek.wiity-vscode-theme",
        github: "https://github.com/Puszkarek/wiity-vscode-theme",
      },
      imageURL: "https://raw.githubusercontent.com/Puszkarek/wiity-vscode-theme/refs/heads/master/assets/syntax-example.png",
    },
    {
      name: "Midnight Mir444age",
      subtitle: "Code under the moonlight.",
      description: "A theme designed to tap into your inner creativity during those late-night coding sessions.",
      links: {
        marketplace: "https://marketplace.visualstudio.com/items?itemName=Puszkarek.midnight-mirage-theme",
        github: "https://github.com/Puszkarek/midnight-mirage-theme-vscode",
      },
      imageURL: "https://raw.githubusercontent.com/Puszkarek/midnight-mirage-theme-vscode/refs/heads/main/assets/syntax-example.png",
    },
  ];
}
