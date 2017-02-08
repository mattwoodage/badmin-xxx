import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { AuthenticationComponent } from "./auth/authentication.component";

import { routing } from "./app.routing";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth/auth.service"
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/message.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AuthenticationComponent,
        ErrorComponent
    ],
    imports: [      // adding to this UNLOCKS the service so they can be injected in the app
    	BrowserModule, 
    	HttpModule,
        MessageModule,
        AuthModule,
    	routing
    ],
    providers: [		// anything here will be available throughout the whole app
    	AuthService,
    	ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
	
}