import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs'
import { Observable } from "rxjs";

import { ErrorService } from "./errors/error.service";

import { Season } from "./admin/seasons/season.model";

import { League } from "./admin/leagues/league.model";
import * as moment from 'moment'

@Injectable()
export class GlobalService {

	matt: String;
    currentLeague: League;
    currentSeason: Season;
    seasons: Season[];
    startDate: any;

	constructor(private http: Http, private errorService: ErrorService) {}

    init(league, season, seasons) {
    	this.matt = "MATTHEW BRIAN WOODAGE"
    	if (league && season && seasons) {
	        this.currentLeague = JSON.parse(league);
	        this.currentSeason = JSON.parse(season);
	        this.seasons = JSON.parse(seasons);
	        let startYear = this.currentSeason.name.substring(0,4);
	        let startDateMoment = moment('01-09-' + startYear, "DD-MM-YYYY")
	        startDateMoment.add( -startDateMoment.weekday()+1,'days')
	        this.startDate = startDateMoment;
	    }
    }
}
