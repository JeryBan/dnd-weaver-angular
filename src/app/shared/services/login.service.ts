import {effect, inject, Injectable, signal} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User, UserLogin} from "../interfaces/user";

const serverUrl = environment.server;
const headers = {accept: 'application/json'};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http: HttpClient = inject(HttpClient);
  activeUser = signal<User | null>(null);

  constructor() {
    effect( () => {
      if (this.activeUser()) {
        console.log('User <' + this.activeUser()?.username + '> logged in.')
      }
    })
  }

  loginUser(body: UserLogin): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${serverUrl}/user/login/`, body, {headers});
  }
}
