import { Document } from "mongoose";
import { Id, Active, Position, Timestamps, GroupId, CategoryId } from "./shared";
import { MongoId } from "../MongoId";
import { FieldUIElement } from "../enums";
import { ICategoryModelGraphql } from "./Category";
import { IMachineModelGraphql } from "./Machine";
import { IFieldOptionGroupModelGraphql } from "./FieldOptionGroup";

export enum SuggestionType {
	AVERAGE = "AVERAGE",
	MEDIAN = "MEDIAN",
	MAX = "MAX",
	MIN = "MIN",
}

export enum SubFieldOperator {
	ADD = "ADD",
	SUBTRACT = "SUBTRACT",
}

export interface IFieldSubField extends Id {
	fieldId: MongoId;
	operator: SubFieldOperator;
}

export interface IField extends Id, GroupId, Active, Timestamps, CategoryId, Position, Document {
	name: string;
	description: string;
	uiElement: FieldUIElement;
	mainInput: boolean;
	validation: {
		__typename?: string;
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
	};
	format: {
		__typename?: string;
		halfRow: boolean;
		helpText: string;
		showOnInsert: boolean;
		hideSuggestion: boolean;
		showOnDetailedOnly: boolean;
		suggestionType: SuggestionType;
		showOnManage: boolean;
		showAsTooltip: boolean;
		numberFormat: string;
	};
	defaultFirst: any;
	defaultSecond: any;
	_fields: IFieldSubField[];
}

export interface IFieldModel extends IField {}
export interface IFieldModelGraphql extends IFieldModel {
	_edit: boolean;
	_remove: boolean;

	optionGroups: IFieldOptionGroupModelGraphql[];

	category: ICategoryModelGraphql | null;
	machine: IMachineModelGraphql | null;
	fields: IFieldModelGraphql[];
}
