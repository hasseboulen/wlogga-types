// import { Document } from "mongoose";
import {
  Id,
  Active,
  Position,
  Timestamps,
  GroupId,
  CategoryId,
} from "./shared";
import { MongoId } from "../MongoId";
import { SummerizationTimes, SummerizationModules } from "../enums";
import { ICategoryModelGraphql } from "./Category";
import { IFieldModelGraphql } from "./Field";

export interface IPrintTemplateSubField extends Id, Position {
  label: string;
  fieldId: MongoId;
}

export interface IPrintTemplateField extends IPrintTemplateSubField {}

export interface IPrintTemplate
  extends Id,
    Active,
    Timestamps,
    GroupId,
    CategoryId {
  name: string;
  title: string;
  description: string;
  summerizationTime: SummerizationTimes;
  summerizationModule: SummerizationModules;
  withPerformedBy: boolean;
  withDate: boolean;
  _fields: IPrintTemplateSubField[];
}

export interface IPrintTemplateModel extends IPrintTemplate {}
export interface IPrintTemplateModelGraphql extends IPrintTemplateModel {
  _edit: boolean;
  _remove: boolean;

  category: ICategoryModelGraphql;

  fields: IFieldModelGraphql[];
}
