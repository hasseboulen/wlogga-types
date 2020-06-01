// import { Document } from "mongoose";
import { Id, Active, Timestamps, GroupId, CategoryId } from "./shared";
import { MongoId } from "../MongoId";
import { IUserModelGraphql } from "./User";
import { JobPermissionLevel } from "../enums";

export interface CategoryPermissions extends Id, CategoryId {
  level: JobPermissionLevel;
}

export interface CategoryPermissionsWithName extends CategoryPermissions {
  name: string;
}

export interface IUserGroup extends GroupId, Active, Timestamps, Id {
  name: string;
  description: string;
  userIds: MongoId[];
  categoryPermissions: CategoryPermissions[];
}

export interface IUserGroupModel extends IUserGroup {}
export interface IUserGroupModelGraphql extends IUserGroupModel {
  _edit: boolean;
  _remove: boolean;
  _test: boolean;

  categoryPermissionsWithName: CategoryPermissionsWithName[];
  users: IUserModelGraphql[];
}
