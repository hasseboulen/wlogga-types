// import { Document } from "mongoose";
import { Moment } from "moment";
import { Id, Timestamps, GroupId, CustomerId, CategoryId } from "./shared";
import { MongoId } from "../MongoId";
import { ICustomerModelGraphql } from "./Customer";
import { ICategoryModelGraphql } from "./Category";
import { IMachineModelGraphql } from "./Machine";
import { IUserModelGraphql } from "./User";

export interface IJobFieldValue extends Id {
  fieldId: MongoId;
  label?: string;
  value?: string;
  number?: number;
  duration?: null | number;
  moment?: Date | Moment;
  start?: null | Date | Moment;
  end?: null | Date | Moment;
  optionId?: MongoId;
  machineId?: MongoId;
  machine?: IMachineModelGraphql;
  // JobId: string;
}

export interface IJob extends Id, CategoryId, CustomerId, GroupId, Timestamps {
  RID: number;
  fieldValues: IJobFieldValue[];
  date: Date;

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
  date: Date;
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
