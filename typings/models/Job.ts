import { Document } from "mongoose";
import { Moment } from "moment";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Id, Timestamps, GroupId, CustomerId, CategoryId } from "./shared";
import { MongoId } from "../MongoId";
import { ICustomerModelGraphql } from "./Customer";
import { ICategoryModelGraphql } from "./Category";
import { IMachineModelGraphql } from "./Machine";
import { IUserModelGraphql } from "./User";

export interface FieldId {
	fieldId: MongoId;
}

export interface JobFieldText extends Id, FieldId {
	value: string;
}
export interface JobFieldTextArea extends JobFieldText {}

export interface JobFieldBoolean extends Id, FieldId {
	boolean: boolean;
}

export interface JobFieldRadio extends JobFieldSelect {}
export interface JobFieldRange extends Id, FieldId {
	number: number;
}
export interface JobFieldColor extends Id, FieldId {
	value: string;
}
export interface JobFieldMap extends Id, FieldId {
	latitude: string;
	longitude: string;
}

export interface JobFieldNumber extends Id, FieldId {
	number: number;
}
export interface JobFieldNumberInterval extends JobFieldNumber {}

export interface JobFieldTime extends Id, FieldId {
	duration: null | number;
}

export interface JobFieldTimeInterval extends JobFieldTime {
	start: Moment | null | undefined;
	end: Moment | null | undefined;
}

export interface JobFieldSelect extends Id, FieldId {
	label: string;
	value: string;
	optionId?: MongoId;
	customerId?: MongoId;
}
export interface JobFieldSelectNumber extends JobFieldSelect, JobFieldNumber {}
export interface JobFieldSelectTime extends JobFieldSelect, JobFieldTime {}
export interface JobFieldSelectTimeInterval extends JobFieldSelect, JobFieldTimeInterval {}

export interface JobFieldMachine extends Id, FieldId {
	machineId: MongoId;
}
export interface JobFieldMachineNumber extends JobFieldMachine, JobFieldNumber {}
export interface JobFieldMachineTime extends JobFieldMachine, JobFieldTime {}
export interface JobFieldMachineTimeInterval extends JobFieldMachine, JobFieldTimeInterval {}

// export interface IJobFieldValue extends Id {
// 	fieldId: MongoId;
// 	label?: string;
// 	value?: string;
// 	number?: number;
// 	duration?: null | number;
// 	moment?: Moment | null | undefined;
// 	start?: Moment | null | undefined;
// 	end?: Moment | null | undefined;
// 	optionId?: MongoId;
// 	machineId?: MongoId;
// 	machine?: IMachineModelGraphql;
// 	// JobId: string;
// }

export type IJobFieldValue =
	| JobFieldText
	| JobFieldTextArea
	| JobFieldBoolean
	| JobFieldColor
	| JobFieldMap
	| JobFieldRange
	| JobFieldNumber
	| JobFieldNumberInterval
	| JobFieldTime
	| JobFieldTimeInterval
	| JobFieldRadio
	| JobFieldSelect
	| JobFieldSelectNumber
	| JobFieldSelectTime
	| JobFieldSelectTimeInterval
	| JobFieldMachine
	| JobFieldMachineNumber
	| JobFieldMachineTime
	| JobFieldMachineTimeInterval;

export interface IJob extends Id, CategoryId, CustomerId, GroupId, Timestamps, Document {
	RID: number;
	fieldValues: IJobFieldValue[];
	date: Date | MaterialUiPickersDate;

	performed: boolean;
	performedAt: Date;
	performedBy: MongoId;

	examined: boolean;
	examinedAt: Date;
	examinedBy: MongoId;

	billed: boolean;
	billedAt: Date;
	billedBy: MongoId;

	paid: boolean;
	paidAt: Date;
	paidBy: MongoId;

	validated: boolean;
	validatedAt: Date;
	validatedBy: MongoId;

	archived: boolean;
	archivedAt: Date;
	archivedBy: MongoId;
}

export interface IJobModel extends IJob {}
export interface IJobForm extends Partial<IJobModel> {
	date: Date | MaterialUiPickersDate;
	fieldValues: IJobFieldValue[];
}

export interface IJobModelGraphql extends IJobModel {
	oid: string;
	category: ICategoryModelGraphql | null;
	customer: ICustomerModelGraphql | null;
	creator: IUserModelGraphql | null;
	performer: IUserModelGraphql | null;
	[key: string]: any;
}
