export class Venue {
	name: string;
	type: string;
	address_1: string;
	address_2: string;
	address_3: string;
	town: string;
	county: string;
	postcode: string;
	coordinates: string;
	venueId?: string;

	constructor(name: string,
				type: string,
				address_1: string,
				address_2: string,
				address_3: string,
				town: string,
				county: string,
				postcode: string,
				coordinates: string,
				venueId?: string) {
		this.name = name;
		this.type = type;
		this.address_1 = address_1;
		this.address_2 = address_2;
		this.address_3 = address_3;
		this.town = town;
		this.county = county;
		this.postcode = postcode;
		this.coordinates = coordinates;
		this.venueId = venueId;
	}

	full_address() {
		return [this.address_1, this.address_2, this.address_3, this.town, this.county, this.postcode].join(', ')
	}
}
