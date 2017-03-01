import { Component, OnInit } from "@angular/core";
import { Format } from "./format.model";
import { FormatService } from "./format.service";

@Component({
	selector: 'app-format-list',
	template: `
		<div class="">
			<app-format
			 	[format]="format"
			 	*ngFor="let format of formats">
			</app-format>
		</div>
	`
})

export class FormatListComponent implements OnInit {

	formats: Format[];

    constructor(private formatService: FormatService) {};

    ngOnInit() {
    	this.formatService.getFormats()
    		.subscribe(
    			(formats: Format[]) => {
    				this.formats = formats;
    			}
    		);
    }
}