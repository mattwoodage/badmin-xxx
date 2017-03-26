import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs'
import { Observable } from "rxjs";

import { ErrorService } from "./errors/error.service";

import { Season } from "./admin/seasons/season.model";
import { SeasonService } from "./admin/seasons/season.service";

import { League } from "./admin/leagues/league.model";
import * as moment from 'moment'

@Injectable()
export class GlobalService {

    currentLeague: League;
    currentSeason: Season;
    seasons: Season[];
    startDate: any;

	constructor(private http: Http, private errorService: ErrorService, private seasonService: SeasonService) {}

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
	        this.checkAuthentication();
	    }
    }

    checkAuthentication() {
    	//use this to check if authenticated
    }
}
