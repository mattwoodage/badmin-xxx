import { Component, Input } from "@angular/core";
import { Format } from "./format.model";
import { FormatService } from "./format.service";

@Component({
	selector: 'app-format',
	templateUrl: './format.component.html',
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

export class FormatComponent {
    @Input() format: Format;


    constructor(private formatService: FormatService) {};

    onEdit() {
       this.formatService.editFormat(this.format);
    }

    onDelete() {
        this.formatService.deleteFormat(this.format)
        	.subscribe(
        		result => console.log(result)
        	);
    }

}