import { Component, Input, OnInit } from "@angular/core";
import { Division } from "./division.model";
import { DivisionService } from "./division.service";

import { FormatService } from "../formats/format.service";
import { Format } from "../formats/format.model";

@Component({
	selector: 'app-division',
	templateUrl: './division.component.html',
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

export class DivisionComponent implements OnInit {
    @Input() division: Division;

    formats: Format[];

    constructor(private divisionService: DivisionService, private formatService: FormatService) {};

    ngOnInit() {
        this.formatService.getFormats()
            .subscribe(
                (formats: Format[]) => {
                    this.formats = formats;
                }
            );
    }

    onEdit() {
       this.divisionService.editDivision(this.division);
    }

    onDelete() {
        this.divisionService.deleteDivision(this.division)
        	.subscribe(
        		result => console.log(result)
        	);
    }

    getFormat() {
        if (this.formats) return this.formats.filter(format => format.formatId === this.division.format.valueOf())[0];
        return null
    }

}