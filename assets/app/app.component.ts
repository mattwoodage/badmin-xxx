import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { GlobalService } from "./global.service"

@Component({
    selector: 'badmin-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	constructor(
		private globalService: GlobalService,
		private elementRef: ElementRef
	) {
		globalService.init(
			elementRef.nativeElement.getAttribute('currentLeague'),
			elementRef.nativeElement.getAttribute('currentSeason'),
			elementRef.nativeElement.getAttribute('seasons')
		)
	}

	ngOnInit() {
    }

}