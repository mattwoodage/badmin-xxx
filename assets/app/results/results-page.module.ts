import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResultsPageComponent } from "./results-page.component";


@NgModule({
	declarations: [
		ResultsPageComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class ResultsPageModule {

}