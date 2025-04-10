import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

 readonly #http =inject(HttpClient);
 register(email: string, password: string): Observable <unknown> {
  const url= `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
  
  const body= {email, password, returnSecurToken: true}
   return this.#http.post(url, body);
 }
}
