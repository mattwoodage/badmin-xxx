import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs'
import { Observable } from "rxjs";

import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {

	constructor(private http: Http, private errorService: ErrorService) {}

	currentUser: User;

	signup(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('/user', body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	signin(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('/user/signin', body, {headers: headers})
			.map((response: Response) => {
				const usr = response.json().user;
				this.currentUser = new User(
					usr.firstName,
					usr.lastName,
					'',
					usr.email
					);
				return response.json()
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	init() {
		console.log('token:',localStorage.getItem('token'))
		if (this.isLoggedIn()) {
			try {
				const usr = JSON.parse(localStorage.getItem('user'))
				console.log("user=",usr)
				this.currentUser = new User(
					usr.firstName,
					usr.lastName,
					'',
					usr.email
					);
			}
			catch (e) {

			}

		}
	}

	logout() {
		this.currentUser = undefined;
		localStorage.clear();
	}

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}

	getUserName() {
		if (this.isLoggedIn()) return this.currentUser.full_name()
		return 'NOT LOGGED IN'
	}
}

