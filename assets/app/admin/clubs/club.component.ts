import { Component, Input } from "@angular/core";
import { Club } from "./club.model";
import { ClubService } from "./club.service";

@Component({
	selector: 'app-club',
	templateUrl: './club.component.html',
	styles: [`
    	.author {
    		display: inline-block;
    		font-style: italic;
    		font-size: 12px;
    		width: 80%;
    	}
    	.config {
    		display: inline-block;
    		text-align:right;
    		font-size:12px;
    		width:19%;
    	}
    `]
})

export class ClubComponent {
    @Input() club: Club;


    constructor(private clubService: ClubService) {};

    onEdit() {
       this.clubService.editClub(this.club);
    }

    onDelete() {
        this.clubService.deleteClub(this.club)
        	.subscribe(
        		result => console.log(result)
        	);
    }

}