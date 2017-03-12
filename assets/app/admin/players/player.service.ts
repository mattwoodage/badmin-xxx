import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs';
import { Observable } from "rxjs";

import { Player } from "./player.model";
import { ErrorService } from "../../errors/error.service";

@Injectable()  // this does nothing except adds metadata so the injector can work on this class

export class PlayerService {
	private players: Player[] = [];
	playerIsEdit = new EventEmitter<Player>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addPlayer(player: Player) {

		const body = JSON.stringify(player);
		const headers = new Headers({'Content-Type': 'application/json'});
		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.post('/player' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const player = new Player(
  					result.obj.firstName,
					result.obj.lastName,
					result.obj.swap,
					result.obj.gender,
					result.obj._id
					);
				this.players.push(player);
				return player;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	getPlayers() {
		return this.http.get('/player')
			.map((response: Response) => {
				const players = response.json().obj;
				let transformedPlayers: Player[] = [];
				for (let player of players) {
					transformedPlayers.push(new Player(
						player.firstName,
						player.lastName,
						player.swap,
						player.gender,
						player._id)
					);
				}
				this.players = transformedPlayers;
				return transformedPlayers;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	editPlayer(player: Player) {
		this.playerIsEdit.emit(player);
	}

	updatePlayer(player: Player) {
		const body = JSON.stringify(player);
		const headers = new Headers({'Content-Type': 'application/json'});

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.patch('/player/' + player.playerId + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}

	deletePlayer(player: Player) {
		this.players.splice(this.players.indexOf(player), 1);

		const token = localStorage.getItem('token')
			? '?token=' + localStorage.getItem('token')
			: '';

		return this.http.delete('/player/' + player.playerId + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json())
				return Observable.throw(error.json())
			});
	}
}

