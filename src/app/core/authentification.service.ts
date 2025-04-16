import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

 interface FirebaseResponseSignUp {

  email: string;
  localId: string;
  idToken: string;
  refreshToken:string;
  expiresIn: string;
  registered: boolean;
 
}
interface FirebaseResponseSignIn {
  displayName: string;
  email: string;
  localId: string;
  idToken: string;
  refreshToken:string;
  expiresIn: string;
  registered: boolean;
 
}
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

 readonly #http =inject(HttpClient);

 register(email: string, password: string): Observable <FirebaseResponseSignUp> {
  const url= `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
  
  const body= {email, password, returnSecureToken: true}
   return this.#http.post<FirebaseResponseSignUp>(url, body);
 }
 login(email: string, password: string):Observable<FirebaseResponseSignIn> {
  const url= `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;
  
  const body= {email, password, returnSecureToken: true}
  return this.#http.post<FirebaseResponseSignIn>(url, body);

 }
 save(email: string, userId: string, bearerToken: string): Observable <unknown>{
  const baseurl= `https://firestore.googleapis.com/v1/projects/${environment.firebase.projectId}/databases/(default)/documents`;
  const usersFireStorecollectionId = 'users';
  const url = `${baseurl}/users?key=${environment.firebase.apiKey}&documentId=${userId}`;
  const body={
    fields :{
      email:{stringValue: email},
    },
  };
  const headers = new HttpHeaders({
    Authorization: `Bearer ${bearerToken}`
  });
const options= {headers};
  return this.#http.post(url, body,options);

  }
 }

