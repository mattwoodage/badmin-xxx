import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CupPageComponent } from "./cup-page.component";

@NgModule({
	declarations: [
		CupPageComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class CupPageModule {

}