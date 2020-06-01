import { Document } from "mongoose";
import { Active, Position, Timestamps, GroupId, Id } from "./shared";
import { MongoId } from "../MongoId";
import { IFieldModelGraphql } from "./Field";
import { ICustomerModelGraphql } from "./Customer";
import { IMachineModelGraphql } from "./Machine";
import { IPrintTemplateModelGraphql } from "./PrintTemplate";
import { IJobModelGraphql } from "./Job";

import { JobColumn, JobQueryColumn } from "../JobColumn";

import {
  SummerizationModules,
  SummerizationTimes,
  JobPermissionLevel,
} from "../enums";

export type ViewStateColumns = { [x in JobColumn]: boolean } & {
  __typename: string;
};
export type ViewStateJobQuery = { [x in JobQueryColumn]: boolean | null } & {
  __typename: string;
  from: string;
};

export interface ICategoryViewState {
  __typename: string;
  _id: string;
  sorted: { __typename: string; id: string; desc: boolean }[];
  filtered: { id: string; value: string }[];
  resized: { id: string; value: number }[];
  expanded: Array<any>;
  page: number;
  pageSize: number;

  columns: ViewStateColumns;
  jobQuery: ViewStateJobQuery;

  selectedJobIds: string[];
  filteredJobIds: string[];
  editJobIds: string[];
  selectAll: boolean;
  menuOpen: boolean;
  printTemplateId: string | null;

  invoiceSummerizationModule: SummerizationModules;
  invoiceSummerizationTime: SummerizationTimes;

  actions: {
    __typename: string;
    hasNonExamined: boolean;

    hasNonBilled: boolean;
    hasBilled: boolean;

    hasNonPaid: boolean;
    hasPaid: boolean;

    hasNonArchived: boolean;
    hasArchived: boolean;

    hasInvalidated: boolean;
    hasValidated: boolean;
  };
}

export interface ICategory extends Id, Position, Active, Timestamps, GroupId {
  oid: string;
  oldId: string;
  name: string;
  description: string;
  mainFieldId: MongoId;
  billByFieldId: MongoId;
  payByFieldId: MongoId;
  groupJobsByDays: number;
  jobCount: number;
  medians: any;
  maintenance: boolean;
  maintenanceInterval: number;
  maintenanceWeekends: boolean;
}

export interface ICategoryModel extends ICategory, Document {}

export interface ICategoryModelGraphql extends ICategoryModel {
  _edit: boolean;
  _remove: boolean;

  fields: IFieldModelGraphql[];
  mainField: IFieldModelGraphql | null;
  billField: IFieldModelGraphql | null;
  payField: IFieldModelGraphql | null;

  jobPermissions: JobPermissionLevel;

  machines: IMachineModelGraphql[];
  customers: ICustomerModelGraphql[];

  printTemplates: IPrintTemplateModelGraphql[];
  jobs: IJobModelGraphql[];
  viewState: ICategoryViewState;
}
