import { Component } from '@angular/core';
import { HomeBannerDumbComponent } from "./home-banner/home-banner.dumb.component";

@Component({
  standalone: true,
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
  imports: [HomeBannerDumbComponent]
})
export class HomePageComponent {

}
