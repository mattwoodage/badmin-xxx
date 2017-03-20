import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs'
import { Observable } from "rxjs";

import { ErrorService } from "./errors/error.service";

import { Season } from "./admin/seasons/season.model";

import { League } from "./admin/leagues/league.model";


@Injectable()
export class GlobalService {

    currentLeague: League;
    currentSeason: Season;
    seasons: Season[];

	constructor(private http: Http, private errorService: ErrorService) {}

    init(league, season, seasons) {
        this.currentLeague = JSON.parse(league);
        this.currentSeason = JSON.parse(season);
        this.seasons = JSON.parse(seasons);
    }
}
