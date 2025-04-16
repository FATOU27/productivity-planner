import { Component, inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { AuthentificationService } from './core/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly #authentificationService = inject(AuthentificationService);

  onLogin() {
    const email = 'dieng.fa@gmail.com';
    const password = 'ddddddd';

    this.#authentificationService
      .login(email, password)
      .pipe(
        switchMap((response) => {
          console.log('Login response:', response);

          const { email, localId, idToken } = response;
          return this.#authentificationService.save(email, localId, idToken);
        })
      )
      .subscribe((saveResponse) => {
        console.log('Save response:', saveResponse);
      });
  }
}

 // title = 'productivity-planner';


