import { Component, Input } from "@angular/core";
import { Match } from "./match.model";
import { MatchService } from "./match.service";

@Component({
	selector: 'app-match',
	templateUrl: './match.component.html',
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

export class MatchComponent {
    @Input() match: Match;


    constructor(private matchService: MatchService) {};

    onEdit() {
       this.matchService.editMatch(this.match);
    }

    onDelete() {
        this.matchService.deleteMatch(this.match)
        	.subscribe(
        		result => console.log(result)
        	);
    }


}