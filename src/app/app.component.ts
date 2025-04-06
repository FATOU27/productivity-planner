import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.staging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'productivity-planner';
  IsProductionEnvironnement = environment.production;
  firebaseProjectId = environment.firebase.projectId; 
}
