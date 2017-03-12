import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from "./user.model";
import { AuthService } from "./auth.service"

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
	myForm: FormGroup;

	constructor(private authService: AuthService, private router: Router) {}

	onSubmit() {

		const user = new User(
			'F','L',this.myForm.value.password,
			this.myForm.value.email
		);

		this.authService.signin(user)
			.subscribe(
				data => {
					localStorage.setItem('token', data.token);
					localStorage.setItem('userId', data.userId);
					localStorage.setItem('user', JSON.stringify(data.user));
					this.router.navigateByUrl('/:season/home');
				},
				error => console.error(error)
			)

		this.myForm.reset();
	}

	ngOnInit() {
		this.myForm = new FormGroup({
			email: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required)
		});
	}
}