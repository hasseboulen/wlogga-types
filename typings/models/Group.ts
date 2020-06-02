import { Document } from "mongoose";
import { Id, Active, Contact, Adress } from "./shared";
import { MongoId } from "../MongoId";
import { SummerizationTimes, SummerizationModules } from "../enums";

export interface IGroupUser extends Id {
  userId: MongoId;
  employed: boolean;
  admin: boolean;
  contractor: boolean;
  active: boolean;
}

export interface IGroup extends Id, Active, Contact, Document {
  name: string;
  oid: string;
  billingInformation: {
    website: string;
    organisation: string;
  } & Adress &
    Contact;
  contactInformation: Adress & Contact;
  extrasInformation: any;
  inviteCode: string;
  _users: IGroupUser[];
  defaultUserSummerizationTime: SummerizationTimes;
  defaultUserSummerizationModule: SummerizationModules;
}

export interface IGroupModel extends IGroup {}

export interface IGroupModelGraphql extends IGroupModel {
  _edit: boolean;
  _remove: boolean;

  __typename?: string;
  userIsActive: boolean;
  userNonPaidSeconds: number;
  userOldestNonPaid: Date | null;
  userIsContractor: boolean;
}
