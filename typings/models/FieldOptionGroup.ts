import { Document } from "mongoose";
import { Id, Active, GroupId } from "./shared";
import { MongoId } from "../MongoId";
import { IFieldModelGraphql, ICustomerModelGraphql } from "..";
import { IFieldOptionModelGraphql } from "./FieldOption";

export interface IFieldOptionGroup extends Id, Document, Active, GroupId {
	name: string;
	fieldIds: MongoId[];
}

export interface IFieldOptionGroupModel extends IFieldOptionGroup {}
export interface IFieldOptionGroupModelGraphql extends IFieldOptionGroupModel {
	fields: IFieldModelGraphql[];
	options: IFieldOptionModelGraphql[];
	availableCustomers: ICustomerModelGraphql[];
}
