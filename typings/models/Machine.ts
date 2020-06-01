import { Document } from "mongoose";
import { Id, Active, Timestamps, GroupId, ActiveInCategories } from "./shared";
import { ICategoryModelGraphql } from "./Category";

export interface IMachineService extends Id {
  machineHours: number;
  description: string;
}

export interface IMachine
  extends GroupId,
    Active,
    ActiveInCategories,
    Timestamps {
  name: string;
  description: string;
  usesMachineHours: boolean;
  machineHours: number;
  service: IMachineService[];
}

export interface IMachineModel extends IMachine, Document {}
export interface IMachineModelGraphql extends IMachineModel {
  categories: ICategoryModelGraphql[];
}
