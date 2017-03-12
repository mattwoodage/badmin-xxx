export class User {

	firstName: string;
	lastName: string;
	password: string;
	email: string;

	constructor(firstName: string,lastName:string,password:string,email:string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.email = email;
	}

	full_name() {
		return [this.firstName, this.lastName].join(' ')
	}
}