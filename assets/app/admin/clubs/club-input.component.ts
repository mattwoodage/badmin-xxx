import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ClubService } from "./club.service";
import { Club } from "./club.model";

@Component({
	selector: 'app-club-input',
	templateUrl: './club-input.component.html'
})

export class ClubInputComponent implements OnInit {

	club: Club;

	constructor(private clubService: ClubService) {}
	onSubmit(form: NgForm) {
		if (this.club) {
			// Edit
			this.club.name = form.value.name;
			this.club.description = form.value.description;
			this.club.adults = form.value.adults;
			this.club.juniors = form.value.juniors;
			this.club.members = form.value.members;
			this.club.website = form.value.website;

			this.clubService.updateClub(this.club)
				.subscribe(
					result => console.log(result)
				)
			this.club = null;
		} else {
			// Create
			const club = new Club(form.value.name,
								  form.value.description,
								  form.value.adults,
								  form.value.juniors,
								  form.value.members,
								  form.value.website);
			this.clubService.addClub(club)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.club = null;
		form.resetForm();
	}

	ngOnInit() {
		this.clubService.clubIsEdit.subscribe(
			(club: Club) => this.club = club
		);
	}
}