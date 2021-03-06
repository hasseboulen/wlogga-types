import { Document } from "mongoose";
import { Id, Active, Timestamps, GroupId, CategoryId } from "./shared";
import { MongoId } from "../MongoId";
import { SummerizationTimes, SummerizationModules } from "../enums";
import { ICategoryModelGraphql } from "./Category";
import { IFieldModelGraphql } from "./Field";

export interface IPrintTemplate
  extends Id,
    Active,
    Timestamps,
    GroupId,
    CategoryId,
    Document {
  name: string;
  title: string;
  description: string;
  summerizationTime: SummerizationTimes;
  summerizationModule: SummerizationModules;
  withPerformedBy: boolean;
  withDate: boolean;
  fieldIds: MongoId[];
}

export interface IPrintTemplateModel extends IPrintTemplate {}
export interface IPrintTemplateModelGraphql extends IPrintTemplateModel {
  _edit: boolean;
  _remove: boolean;

  category: ICategoryModelGraphql;

  fields: IFieldModelGraphql[];
}
