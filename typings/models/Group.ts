import { Document } from "mongoose";
import { Id, Active, Contact, Adress } from "./shared";
import { MongoId } from "../MongoId";
import { SummerizationTimes, SummerizationModules } from "../enums";

interface GroupBillingInformation extends Adress, Contact {
  website: string;
  organisation: string;
}

interface GroupContactInformation extends Adress, Contact {}

export interface IGroupUser extends Id {
  userId: MongoId;
  employed: boolean;
  admin: boolean;
  contractor: boolean;
  active: boolean;
}

export interface IGroup extends Id, Active, Contact {
  name: string;
  oid: string;
  billingInformation: GroupBillingInformation;
  contactInformation: GroupContactInformation;
  extrasInformation: any;
  inviteCode: string;
  _users: IGroupUser[];
  defaultUserSummerizationTime: SummerizationTimes;
  defaultUserSummerizationModule: SummerizationModules;
}

export interface IGroupModel extends IGroup, Document {}

export interface IGroupModelGraphql extends IGroupModel {
  _edit: boolean;
  _remove: boolean;

  __typename?: string;
  userIsActive: boolean;
  userNonPaidSeconds: number;
  userOldestNonPaid: Date | null;
  userIsContractor: boolean;
}
