import { Document } from "mongoose";
import { Id, Active, Position, Timestamps, GroupId, CustomerId, CategoryId } from "./shared";
import { MongoId } from "../MongoId";
import { ICustomerModelGraphql } from "./Customer";
import { FieldUIElement } from "../enums";
import { ICategoryModelGraphql } from "./Category";
import { IMachineModelGraphql } from "./Machine";

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

export interface IFieldOptionGroup extends Id {
	name: string;
	options: IFieldOption[];
}

export interface IFieldOption extends Id, Position, CustomerId, Active {
	value: string;
	label: string | null;
	paidBy: OptionPaidBy;
	optionGroupId: MongoId;
	price: number;
	articleNumber: string;
	description: string;
	activeStartDate: Date;
	activeEndDate: Date;
	lastUsed: Date;
	customer?: ICustomerModelGraphql;
}

interface IFieldValidation {
	isInteger: boolean;
	minValue: number;
	maxValue: number;
	required: boolean;
	notValue: string;
	lowerLimit: number;
	upperLimit: number;
	_validate: boolean;
	timeMin: number;
	timeMax: number;
	timeInterval: number;
	multiple: boolean;
	customInput: boolean;
}

export enum SuggestionType {
	AVERAGE = "AVERAGE",
	MEDIAN = "MEDIAN",
	MAX = "MAX",
	MIN = "MIN",
}

interface IFieldFormat {
	halfRow: boolean;
	helpText: string;
	showOnInsert: boolean;
	hideSuggestion: boolean;
	showOnDetailedOnly: boolean;
	suggestionType: SuggestionType;
	showOnManage: boolean;
	showAsTooltip: boolean;
	numberFormat: string;
}

export enum SubFieldOperator {
	ADD = "ADD",
	SUBTRACT = "SUBTRACT",
}

interface IFieldSubField extends Id {
	fieldId: MongoId;
	operator: SubFieldOperator;
}

export interface IField extends Id, GroupId, Active, Timestamps, CategoryId, Position {
	name: string;
	description: string;
	uiElement: FieldUIElement;
	validation: IFieldValidation;
	format: IFieldFormat;
	options: IFieldOption[];
	optionGroups: IFieldOptionGroup[];
	defaultFirst: any;
	defaultSecond: any;
	_fields: IFieldSubField[];
}

export interface IFieldModel extends IField, Document {}
export interface IFieldModelGraphql extends IFieldModel {
	_edit: boolean;
	_remove: boolean;

	category: ICategoryModelGraphql | null;
	machine: IMachineModelGraphql | null;
	fields: IFieldModelGraphql[];
}
