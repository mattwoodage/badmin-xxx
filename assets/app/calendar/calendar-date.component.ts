import { Component, Input } from "@angular/core";

@Component({
	selector: 'app-calendar-date',
	templateUrl: './calendar-date.component.html',
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

export class CalendarDateComponent {

    @Input() date: any;

    constructor() {};

}