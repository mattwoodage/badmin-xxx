import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClubsPageComponent } from "./clubs-page.component";

@NgModule({
	declarations: [
		ClubsPageComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class ClubsPageModule {

}