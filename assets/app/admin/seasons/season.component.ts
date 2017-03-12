import { Component, Input } from "@angular/core";
import { Season } from "./season.model";
import { SeasonService } from "./season.service";

@Component({
	selector: 'app-season',
	templateUrl: './season.component.html',
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

export class SeasonComponent {
    @Input() season: Season;


    constructor(private seasonService: SeasonService) {};

    onEdit() {
       this.seasonService.editSeason(this.season);
    }

    onDelete() {
        this.seasonService.deleteSeason(this.season)
        	.subscribe(
        		result => console.log(result)
        	);
    }

}