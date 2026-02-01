import { Component, inject } from "@angular/core";
import { ModalHeaderComponent } from "../../components/modal-header/modal-header.component";
import { ScrollableContainerComponent } from "../../components/scrollable-container/scrollable-container.component";
import { ScrollableViewportComponent } from "../../components/scrollable-viewport/scrollable-viewport.component";
import { ActionDirective } from "../../directives/action.directive";
import { ModalReference } from "../../libs/modal/services/modal-reference.service";

type Extension = {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  commands?: {
    name: string;
    description: string;
  }[];
  configuration?: {
    name: string;
    description: string;
  }[];
  links: {
    github: string;
    marketplace: string;
  };
};

@Component({
  selector: "app-vscode-extensions-overview-modal",
  imports: [ModalHeaderComponent, ScrollableViewportComponent, ScrollableContainerComponent, ActionDirective],
  templateUrl: "./vscode-extensions-overview-modal.component.html",
  styleUrl: "./vscode-extensions-overview-modal.component.scss",
})
export class VSCodeExtensionsOverviewModalComponent {
  public readonly modalReference = inject(ModalReference);

  public readonly extensions: ReadonlyArray<Extension> = [
    {
      name: "Vanta.js",
      subtitle: "TypeScript playground that lives inside your editor",
      description:
        "Vanta.js is a TypeScript playground that lives inside your editor. It stares back at you with realtime execution results. Unlike other playgrounds that require complex setup or external windows, Vanta runs right where you are. It supports your local environment, meaning your node_modules and tsconfig.json work out of the box.",
      features: ["Realtime Execution: Code runs as you type (debounced)", "Inline Logs: console.log output appears directly next to your code", "Context Aware: Uses your workspace's node_modules and tsconfig.json", "Zero Config: Just run it"],
      commands: [
        {
          name: "Vanta: Absorb (Run in Current File)",
          description: "Absorbs the current file into the Vanta runtime.",
        },
        {
          name: "Vanta: Singularity (Create New File)",
          description: "Opens a new event horizon (playground.ts) for testing.",
        },
      ],
      configuration: [
        {
          name: "vanta.debounce",
          description: "Delay in milliseconds before running the playground after typing (default: 300).",
        },
        {
          name: "vanta.tsconfigPath",
          description: "Explicit path to your tsconfig.json. If left empty, Vanta tries to find it automatically.",
        },
      ],
      links: {
        github: "https://github.com/puszkarek/vanta-vs-code-extension",
        marketplace: "https://marketplace.visualstudio.com/items?itemName=puszkarek.vanta-js",
      },
    },
    {
      name: "Quant",
      subtitle: "Helpful numeric value conversions directly in your editor",
      description: "Quant is a VS Code extension that provides helpful numeric value conversions directly in your editor tooltips. Designed for web developers, it helps you quickly see equivalent units without leaving your code.",
      features: [
        "Hover Conversions: Hover over a numeric value with units (px, rem, em) to see its equivalent",
        "Configurable Base: Set your custom base font size for accurate conversions",
        "Supports Multiple Languages: Works in CSS, SCSS, SASS, LESS, and Stylus files",
      ],
      configuration: [
        {
          name: "quant.baseFontSize",
          description: "Set your custom base font size used for conversions (default is 16).",
        },
      ],
      links: {
        github: "https://github.com/puszkarek/quant-vs-code-extension",
        marketplace: "https://marketplace.visualstudio.com/items?itemName=puszkarek.quant",
      },
    },
    {
      name: "Prox",
      subtitle: "Seamlessly navigate between sibling files",
      description:
        "Seamlessly navigate between sibling files with a beautiful visual interface. Designed for the Zen Mode developer, Prox allows you to quickly cycle through component files (like Angular's .ts, .html, .scss) without ever touching the mouse or sidebar.",
      features: [
        "Quick Pick Switch: See all siblings and switch instantly",
        "Cycle Navigation: Rotate through files with shortcuts",
        "Settings Access: Access settings via command palette",
        "Smart Tab Management: Automatically reuses tabs or opens new ones based on state",
      ],
      configuration: [
        {
          name: "prox.excludePatterns",
          description: "Glob patterns to exclude from sibling file listing.",
        },
        {
          name: "prox.openNewTabAsPreview",
          description: "If true, new tabs will be opened as preview tabs.",
        },
        {
          name: "prox.closeCurrentTab",
          description: "If true, the current tab will be closed after opening the sibling file.",
        },
      ],
      links: {
        github: "https://github.com/puszkarek/prox-vs-code-extension",
        marketplace: "https://marketplace.visualstudio.com/items?itemName=puszkarek.prox",
      },
    },
  ];
}
