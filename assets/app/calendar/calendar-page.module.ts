import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarPageComponent } from "./calendar-page.component";
import { CalendarDateComponent } from "./calendar-date.component";

@NgModule({
	declarations: [
		CalendarPageComponent,
		CalendarDateComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: []
})

export class CalendarPageModule {

}