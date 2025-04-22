import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, computed, HostBinding, inject, input } from "@angular/core";
import { NgIconComponent, provideNgIconLoader, provideNgIconsConfig, withCaching } from "@ng-icons/core";
import type { IconKey } from "../../types/icon-key";

@Component({
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideNgIconsConfig({}),
    provideNgIconLoader((name) => {
      const http = inject(HttpClient);
      return http.get(`/assets/icons/${name}.svg`, { responseType: "text" });
    }, withCaching()),
  ],
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  // Aria hidden is used to hide the icon from screen readers.
  @HostBinding("attr.aria-hidden") public readonly ariaHidden = true;

  public readonly icon = input.required<IconKey>();
  public readonly iconPath = computed(() => `assets/icons/${this.icon()}.svg#icon`);
}
