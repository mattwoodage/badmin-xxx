import { Component, Input } from "@angular/core";

@Component({
	selector: 'app-tables-team',
	templateUrl: './tables-team.component.html',
	styles: [`
    `]
})

export class TablesTeamComponent {

    @Input() team: any;

    constructor() {};

}