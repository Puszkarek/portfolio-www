import { Component, inject } from "@angular/core";
import { ModalHeaderComponent } from "../../components/modal-header/modal-header.component";
import { ModalReference } from "../../libs/modal/services/modal-reference.service";
import { ActionDirective } from "../../directives/action.directive";
import { ScrollableContainerComponent } from "../../components/scrollable-container/scrollable-container.component";
import { ScrollableViewportComponent } from "../../components/scrollable-viewport/scrollable-viewport.component";

type Project = {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  requirements: string[];
  githubURL: string;
};

@Component({
  selector: "app-terminal-projects-modal",
  imports: [ModalHeaderComponent, ScrollableViewportComponent, ScrollableContainerComponent, ActionDirective],
  templateUrl: "./terminal-projects-modal.component.html",
  styleUrl: "./terminal-projects-modal.component.scss",
})
export class TerminalProjectsModalComponent {
  public readonly modalReference = inject(ModalReference);

  public readonly projects: ReadonlyArray<Project> = [
    {
      name: "B.A.R.D - Ballad Assistant Rhythm Debugger",
      subtitle: "A Rust-based lyrics display for music players",
      description: "Displays synchronized lyrics for your music in terminal and Waybar.",
      features: [
        "Displays lyrics in a terminal window",
        "Displays current lyrics in Waybar based on song position",
        "Reads lyrics from music file tags",
        "Fetches lyrics from online sources if not found",
        "Saves lyrics to file for future use",
        "Supports multiple music players",
        "Supports timestamped lyrics for precise synchronization",
      ],
      requirements: ["playerctl", "music player daemon", "Rust (for building)"],
      githubURL: "https://github.com/puszkarek/bard",
    },
    {
      name: "cmus-waybar-lyrics",
      subtitle: "A Go-based lyrics display for cmus music player",
      description: "Integrates with Waybar to show synchronized lyrics for the cmus music player.",
      features: [
        "Displays current lyrics in Waybar based on song position",
        "Reads lyrics from music file tags",
        "Supports timestamped lyrics for precise synchronization",
        "Automatically scrolls lyrics based on current position",
        "Tries to guess song artist and title from file name",
        "Supports manual refresh via SIGUSR1 signal",
      ],
      requirements: ["cmus music player", "Waybar", "Go (for building)"],
      githubURL: "https://github.com/puszkarek/cmus-waybar-lyrics",
    },
  ];
}
