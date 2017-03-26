import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FixturesPageComponent } from "./fixtures-page.component";
import { FixturesMatchComponent } from "./fixtures-match.component";


@NgModule({
	declarations: [
		FixturesPageComponent,
		FixturesMatchComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class FixturesPageModule {

}