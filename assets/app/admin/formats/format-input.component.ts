import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormatService } from "./format.service";
import { Format } from "./format.model";

@Component({
	selector: 'app-format-input',
	templateUrl: './format-input.component.html'
})

export class FormatInputComponent implements OnInit {

	format: Format;

	constructor(private formatService: FormatService) {}
	onSubmit(form: NgForm) {
		if (this.format) {
			// Edit
			this.format.name = form.value.name;
			this.format.type = form.value.type;
			this.format.orderOfPlay = form.value.orderOfPlay;
			this.format.numRubbers = form.value.numRubbers;
			this.format.numGames = form.value.numGames;

			this.formatService.updateFormat(this.format)
				.subscribe(
					result => console.log(result)
				)
			this.format = null;
		} else {
			// Create
			const format = new Format(form.value.name, form.value.type, form.value.orderOfPlay, form.value.numRubbers, form.value.numGames);
			this.formatService.addFormat(format)
				.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		form.resetForm();
	}

	onClear(form: NgForm) {
		this.format = null;
		form.resetForm();
	}

	ngOnInit() {
		this.formatService.formatIsEdit.subscribe(
			(format: Format) => this.format = format
		);
	}
}