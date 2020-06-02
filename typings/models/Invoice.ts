import { Document } from "mongoose";
import { Id, Active, GroupId, CustomerId } from "./shared";
import { MongoId } from "../MongoId";
import { ICustomerModelGraphql } from "./Customer";
import {
  FieldUIElement,
  SummerizationTimes,
  SummerizationModules,
} from "../enums";
import { IUserModelGraphql } from "./User";
import { IJobModelGraphql } from "./Job";

export enum InvoiceType {
  BILL = "BILL",
  PAY = "PAY",
}

export type IInvoiceData = {
  categoryId: MongoId;
  categoryName: string;
  fields: {
    fieldId: MongoId;
    name: string;
    uiElement: FieldUIElement;
  }[];
  data: IInvoicePDFRow;
}[];

export type IInvoicePDFRow = Array<
  Array<{
    performedBy: string;
    performedAt: string;
    [key: string]: string | null;
  }>
>;

export interface IInvoice extends Id, CustomerId, GroupId, Active, Document {
  oid: string;
  module: SummerizationModules;
  moduleName: string;
  summerization: SummerizationTimes;
  groupName: string;
  logo: any;
  createdAt: Date;
  createdByName: string;
  createdBy: string;
  preview: boolean;
  withPerformedBy: boolean;
  withDate: boolean;
  data: IInvoiceData;
  jobIds: MongoId[];
  archived: boolean;
  accessToken: string;
  type: InvoiceType;
  userId: MongoId;

  paid: boolean;
  billed: boolean;
}

export interface IInvoiceModel extends IInvoice {}
export interface IInvoiceModelGraphql extends IInvoiceModel {
  customer: ICustomerModelGraphql | null;
  user: IUserModelGraphql | null;
  jobs: IJobModelGraphql[];
}
