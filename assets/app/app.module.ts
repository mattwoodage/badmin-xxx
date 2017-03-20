import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { AuthenticationComponent } from "./auth/authentication.component";

import { routing } from "./app.routing";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth/auth.service"
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { MessageModule } from "./messages/message.module";

import { GlobalService } from "./global.service"

import { LeagueModule } from "./admin/leagues/league.module";
import { SeasonModule } from "./admin/seasons/season.module";
import { DivisionModule } from "./admin/divisions/division.module";
import { FormatModule } from "./admin/formats/format.module";
import { ClubModule } from "./admin/clubs/club.module";
import { TeamModule } from "./admin/teams/team.module";
import { VenueModule } from "./admin/venues/venue.module";
import { PlayerModule } from "./admin/players/player.module";
import { MatchModule } from "./admin/matches/match.module";

import { HomePageModule } from "./home/home-page.module";
import { CalendarPageModule } from "./calendar/calendar-page.module";
import { FixturesPageModule } from "./fixtures/fixtures-page.module";
import { ResultsPageModule } from "./results/results-page.module";
import { TablesPageModule } from "./tables/tables-page.module";
import { ClubsPageModule } from "./clubs/clubs-page.module";
import { VenuesPageModule } from "./venues/venues-page.module";
import { PlayersPageModule } from "./players/players-page.module";
import { CupPageModule } from "./cup/cup-page.module";

import { AuthModule } from "./auth/auth.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AuthenticationComponent,
        ErrorComponent
    ],
    imports: [      // adding to this UNLOCKS the service so they can be injected in the app
    	BrowserModule,
    	HttpModule,
        MessageModule,
        LeagueModule,
        SeasonModule,
        DivisionModule,
        FormatModule,
        ClubModule,
        TeamModule,
        VenueModule,
        MatchModule,
        AuthModule,
        PlayerModule,
        HomePageModule,
        CalendarPageModule,
        FixturesPageModule,
        ResultsPageModule,
        TablesPageModule,
        ClubsPageModule,
        VenuesPageModule,
        PlayersPageModule,
        CupPageModule,
    	routing
    ],
    providers: [		// anything here will be available throughout the whole app
    	AuthService,
    	ErrorService,
        GlobalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}