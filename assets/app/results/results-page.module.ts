import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResultsPageComponent } from "./results-page.component";
import { ResultsDivisionComponent } from "./results-division.component";


@NgModule({
	declarations: [
		ResultsPageComponent,
		ResultsDivisionComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class ResultsPageModule {

}