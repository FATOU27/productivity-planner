import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  templateUrl: './home-banner.dumb.component.html',
  styleUrls: ['./home-banner.dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBannerDumbComponent {
  //title = Input.required<String>();

}
