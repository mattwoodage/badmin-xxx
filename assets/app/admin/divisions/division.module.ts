import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DivisionsComponent } from "./divisions.component";
import { DivisionComponent } from "./division.component";
import { DivisionListComponent } from "./division-list.component";
import { DivisionInputComponent } from "./division-input.component";

import { DivisionService } from "./division.service";

@NgModule({
	declarations: [
		DivisionComponent,
        DivisionListComponent,
        DivisionInputComponent,
        DivisionsComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [DivisionService]
})

export class DivisionModule {

}