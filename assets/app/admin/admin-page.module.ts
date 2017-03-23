import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from "../app.routing";
import { AdminPageComponent } from "./admin-page.component";

@NgModule({
	declarations: [
		AdminPageComponent
    ],
    imports: [
    	CommonModule,
    	FormsModule,
    	routing
    ],
    providers: []
})

export class AdminPageModule {

}