// import { Document } from "mongoose";
import {
  Id,
  Active,
  Timestamps,
  GroupId,
  ActiveInCategories,
  Contact,
} from "./shared";
import { SummerizationModules, SummerizationTimes } from "../enums";
import { ICategoryModelGraphql } from "./Category";
import { IInvoiceModelGraphql } from "./Invoice";
import { IJobModelGraphql } from "./Job";

export interface ICustomer
  extends Id,
    Active,
    Timestamps,
    GroupId,
    ActiveInCategories,
    Contact {
  name: string;
  allowSMS: boolean;
  cId: string;
  defaultSummerizationModule: SummerizationModules;
  defaultSummerizationTime: SummerizationTimes;
}

export interface ICustomerModel extends ICustomer {}
export interface ICustomerModelGraphql extends ICustomerModel {
  _edit: boolean;
  _remove: boolean;

  categories: ICategoryModelGraphql[];
  invoices: IInvoiceModelGraphql[];
  jobs: IJobModelGraphql[];
}
