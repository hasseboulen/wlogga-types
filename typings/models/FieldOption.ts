import { Document } from "mongoose";
import { Id, Active, GroupId, CustomerId } from "./shared";
import { MongoId } from "../MongoId";
import { IFieldOptionGroupModelGraphql } from "./FieldOptionGroup";

export enum OptionPaidBy {
	hour = "hour",
	amount = "amount",
}

export enum FieldOptionLongevity {
	INDEFINITELY = "INDEFINITELY",
	TODAY = "TODAY",
	MONTH = "MONTH",
	THIS_MONTH = "THIS_MONTH",
	YEAR = "YEAR",
	THIS_YEAR = "THIS_YEAR",
}

export interface IFieldOption extends Id, Document, Active, GroupId, CustomerId {
	value: string;
	label: string | null;
	paidBy: OptionPaidBy;
	price: number;
	articleNumber: string;
	description: string;
	activeStartDate: Date;
	activeEndDate: Date;
	lastUsed: Date;
	optionGroupId: MongoId;
	customerId: MongoId;
}

export interface IFieldOptionModel extends IFieldOption {}
export interface IFieldOptionModelGraphql extends IFieldOptionModel {
	optionGroup: IFieldOptionGroupModelGraphql[];
}
