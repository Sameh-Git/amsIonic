import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username +':'+ password) });
    return this.httpClient.get(environment.urlAuth, { headers }).pipe
      (
        map(
          userData => {
            sessionStorage.setItem('username', username);
            //sessionStorage.setItem('password', password);
            //console.log(username + " " + password);
            //console.log(userData);
            let authString = 'Basic ' + btoa(username + ':' + password);
            sessionStorage.setItem('basicauth', authString);
            return userData;
          }
        )
      );

    /*
    if (username === "amine" && password === "1234") {  //hardcoded(normalement on va voir comment les récupéerer depuis le backend)
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }*/
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)   // true or false
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}