import { Component, OnInit } from "@angular/core";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AuthService } from "./auth/auth.service"

@Component({
	selector: 'app-footer',
	template: `
		<div class="footer row">
			FOOTER
		</div>
	`
})

export class FooterComponent implements OnInit {
	constructor(private authService: AuthService) {}


	ngOnInit() {
    }

}
