import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {

  constructor(private http: Http, private errorService: ErrorService) {
  }

  signIn(password: string) {
    const body = new URLSearchParams();
    body.set('password', password);
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post('http://localhost:3000/auth', body, {headers: headers})
      .map( res => res.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('lsblogtoken') != null;
  }

}
