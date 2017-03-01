import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormatsComponent } from "./formats.component";
import { FormatComponent } from "./format.component";
import { FormatListComponent } from "./format-list.component";
import { FormatInputComponent } from "./format-input.component";

import { FormatService } from "./format.service";

@NgModule({
	declarations: [
		FormatComponent,
        FormatListComponent,
        FormatInputComponent,
        FormatsComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule
    ],
    providers: [FormatService]
})

export class FormatModule {

}