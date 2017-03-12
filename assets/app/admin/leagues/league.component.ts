import { Component, Input } from "@angular/core";
import { League } from "./league.model";
import { LeagueService } from "./league.service";

@Component({
	selector: 'app-league',
	templateUrl: './league.component.html',
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

export class LeagueComponent {
    @Input() league: League;


    constructor(private leagueService: LeagueService) {};

    onEdit() {
       this.leagueService.editLeague(this.league);
    }

    onDelete() {
        this.leagueService.deleteLeague(this.league)
        	.subscribe(
        		result => console.log(result)
        	);
    }

}