import { MongoId } from "../MongoId";

export interface Id {
	_id: MongoId;
}

export interface GroupId {
	groupId: MongoId;
}

export interface CategoryId {
	categoryId: MongoId;
}

export interface CustomerId {
	customerId: MongoId;
}

export interface Position {
	position: number;
}

export interface Active {
	active: boolean;
}

export interface Timestamps {
	createdAt: Date;
	updatedAt: Date;
	createdBy: MongoId;
	updatedBy: MongoId;
}

export interface Adress {
	name: string;
	street: string;
	zipcode: string;
	location: string;
}

export interface Contact {
	phoneNumber: string;
	email: string;
}

export interface ActiveInCategories {
	activeInCategories: MongoId[];
}

export interface ActiveInMachines {
	activeInMachines: MongoId[];
}
