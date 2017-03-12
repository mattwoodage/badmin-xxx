import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TablesPageComponent } from "./tables-page.component";

@NgModule({
	declarations: [
		TablesPageComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class TablesPageModule {

}