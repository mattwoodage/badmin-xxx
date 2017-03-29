import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs'
import { Observable } from "rxjs";

import { ErrorService } from "./errors/error.service";

import { Season } from "./admin/seasons/season.model";
import { SeasonService } from "./admin/seasons/season.service";

import { League } from "./admin/leagues/league.model";

import { Club } from "./admin/clubs/club.model";
import { Team } from "./admin/teams/team.model";
import { Match } from "./admin/matches/match.model";
import { Division } from "./admin/divisions/division.model";

import { ClubService } from "./admin/clubs/club.service";
import { TeamService } from "./admin/teams/team.service";
import { MatchService } from "./admin/matches/match.service";
import { DivisionService } from "./admin/divisions/division.service";

import * as moment from 'moment'

@Injectable()
export class GlobalService {

    currentLeague: League;
    currentSeason: Season;
    seasons: Season[];
    startDate: any;

    clubs: Club[];
    teams: Team[];
    matches: Match[];
    divisions: Division[];

	constructor(private http: Http,
				private errorService: ErrorService,
				private seasonService: SeasonService,
				private clubService: ClubService,
				private teamService: TeamService,
				private matchService: MatchService,
                private divisionService: DivisionService
			   ) {}

    init(league, season, seasons) {
    	if (league && season && seasons) {
	        this.currentLeague = JSON.parse(league);
	        let s = JSON.parse(season);

	        this.currentSeason = new Season(
					s.name,
					s.status,
					s.league,
					s._id
					);

	        this.seasons = JSON.parse(seasons);
	        let startYear = this.currentSeason.name.substring(0,4);
	        let startDateMoment = moment('01-09-' + startYear, "DD-MM-YYYY")
	        startDateMoment.add( -startDateMoment.weekday()+1,'days')
	        this.startDate = startDateMoment;

	        this.loadAll();
	        this.checkAuthentication();


	    }
    }


    loadAll() {
    	this.loadTeams();
    	this.loadClubs();
    	this.loadMatches();
        this.loadDivisions();
    }

    loadTeams() {
    	this.teamService.getTeams()
            .subscribe(
                (teams: Team[]) => {
                    this.teams = teams;
                }
            );
    }

    loadClubs() {
    	this.clubService.getClubs()
            .subscribe(
                (clubs: Club[]) => {
                    this.clubs = clubs;
                }
            );
    }

    loadMatches() {
    	this.matchService.getMatches()
            .subscribe(
                (matches: Match[]) => {
                    this.matches = matches;
                }
            );
    }

    loadDivisions() {
        this.divisionService.getDivisions()
            .subscribe(
                (divisions: Division[]) => {
                    this.divisions = divisions;
                }
            );
    }

    getTeam(obj) {
    	if (!obj) return
        for (let team of this.teams) {
    		if (team._id == obj._id) return team
    	}
    }

    getDivision(obj) {
        if (!obj) return
        for (let division of this.divisions) {
            if (division.divisionId == obj._id) return division
        }
    }

    checkAuthentication() {
    	//use this to check if authenticated
    }
}
