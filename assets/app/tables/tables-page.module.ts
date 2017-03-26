import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TablesPageComponent } from "./tables-page.component";
import { TablesDivisionComponent } from "./tables-division.component";


@NgModule({
	declarations: [
		TablesPageComponent,
		TablesDivisionComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class TablesPageModule {

}