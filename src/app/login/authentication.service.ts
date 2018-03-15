import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }
  
  login() { 
	  
	    return this.http.get('assets/user.json')
            .map(user => {
						let data = user.json();
						 if (data) {
							// store user details and jwt token in local storage to keep user logged in between page refreshes
							localStorage.setItem('currentUser', JSON.stringify(data));
						}
				});
	}
}