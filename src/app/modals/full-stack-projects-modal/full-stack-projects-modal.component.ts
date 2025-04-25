import { Component, inject } from "@angular/core";
import { ModalHeaderComponent } from "../../components/modal-header/modal-header.component";
import { ModalReference } from "../../libs/modal/services/modal-reference.service";
import { ScrollableContainerComponent } from "../../components/scrollable-container/scrollable-container.component";
import { ScrollableViewportComponent } from "../../components/scrollable-viewport/scrollable-viewport.component";
import { ActionDirective } from "../../directives/action.directive";

type Project = {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
};

@Component({
  selector: "app-full-stack-projects-modal",
  imports: [ModalHeaderComponent, ScrollableViewportComponent, ActionDirective, ScrollableContainerComponent],
  templateUrl: "./full-stack-projects-modal.component.html",
  styleUrl: "./full-stack-projects-modal.component.scss",
})
export class FullStackProjectsModalComponent {
  public readonly modalReference = inject(ModalReference);

  public readonly projects: ReadonlyArray<Project> = [
    {
      name: "Celestify",
      subtitle: "Personalized cosmic posters based on your music taste",
      description:
        "A web application that creates personalized cosmic posters based on your music taste. By connecting to your Spotify account, Celestify transforms your favorite artists into a unique celestial galaxy that visualizes your musical preferences.",
      features: [
        "Personalized Music Galaxy: Connect your Spotify account to generate a cosmic visualization of your music taste",
        "Dynamic Visualizations: Watch your solar system evolve as your music preferences change",
        "Sharable Creations: Download your musical cosmos and share it with friends",
        "Privacy-Focused: Only uses necessary Spotify data and stores minimal information in cookies",
      ],
      technologies: ["Next.js", "TypeScript", "Canvas API for visualizations", "Spotify API for music data"],
      links: {
        live: "https://celestify.vercel.app/",
        github: "https://github.com/Puszkarek/celestify",
      },
    },
    {
      name: "Notora",
      subtitle: "Modern web application with robust and intuitive interface",
      description: "Notora is a modern web application built with Angular that provides a robust and intuitive interface for users. With a focus on responsive design and user experience, Notora delivers a seamless interaction across all devices.",
      features: [
        "Responsive Design: Optimized experience for both desktop and mobile users",
        "Secure Authentication: Complete login/logout functionality with token-based security",
        "Modern UI Components: Includes dropdowns, tables, checkboxes, and more",
        "File Management: Upload and manage images with built-in validation",
        "Notifications System: Keep users informed with an intuitive notification service",
        "Form Management: Comprehensive form handling with multiple states",
      ],
      technologies: ["Angular", "TypeScript", "RxJS for reactive programming", "io-ts for runtime type checking", "REST API backend"],
      links: {
        live: "https://notora-prod.pages.dev/",
        github: "https://github.com/Puszkarek/notora-app",
      },
    },
  ];
}
