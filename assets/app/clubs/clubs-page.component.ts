import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service"
import { Club } from "../admin/clubs/club.model";

@Component({
	selector: 'app-clubs-page',
	template: `
		<div class='row'>
			<div class='col-md-4'>
			<h1>Clubs</h1>
			<ul>
				<li *ngFor="let club of clubs">
				<a (click)="showClub(club)">{{club.name}}</a>
				</li>
			</ul>
			</div>
			<div *ngIf="club" class='col-md-8'>
			<h1>{{club.name}}</h1>
			<table>
				<tr>
					<td>Desc</td>
					<td>{{club.description}}</td>
				</tr>
				<tr>
					<td>Adults</td>
					<td>{{club.adults}}</td>
				</tr>
				<tr>
					<td>Juniors</td>
					<td>{{club.juniors}}</td>
				</tr>
				<tr>
					<td>Members</td>
					<td>{{club.members}}</td>
				</tr>
			</table>
			</div>
		</div>
	`
})

export class ClubsPageComponent implements OnInit {

	clubs: Club[];
	club: Club;

	constructor(private globalService: GlobalService) {}

	ngOnInit() {
		this.clubs = this.globalService.clubs;
	}

	showClub(club) {
		this.club = club
	}


}