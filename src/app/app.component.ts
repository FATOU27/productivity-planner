import { Component, inject } from '@angular/core';
import { AuthentificationService } from './core/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'productivity-planner';
 readonly #authentificationService = inject(AuthentificationService);
 constructor(){
  this.#authentificationService
  .register('dieng.fa@gmail.com','ddddddd')
  .subscribe((response: unknown)=> {
    console.log(response);
  });
 }
}
