import { Document } from "mongoose";
import { Id, GroupId } from "./shared";
import { MongoId } from "../MongoId";
import { IInvoiceModelGraphql } from "./Invoice";
import { IGroupUser } from "./Group";
import { IUserGroupModelGraphql, CategoryPermissionsWithName } from "./UserGroup";
import { CategoryPermissions } from "..";

export interface IGroupPermission extends Id, GroupId {
	categoryPermissions: CategoryPermissions[];
	admin: boolean;
	isTestingPermissions: boolean;
}

export interface IUser extends Id, Document {
	username: string;
	password: string;
	passwordSalt: string;
	name: string;
	emails: { address: string; verified: Boolean }[];
	createdAt: Date;
	updatedAt: Date;
	profile: {
		__typename?: string;
		firstName: string;
		lastName: string;
		birthday: Date;
		gender: string;
		phoneNumber: string;
		avatar?: Buffer;
	};
	services: any;
	currentGroupId: MongoId;
	permissions: IGroupPermission[];
	locale: string;

	token: string;
	resetPasswordToken: string;
	resetPasswordExpire: Date;
}

export interface IUserModel extends IUser {}

export interface IUserModelGraphql extends IUserModel, IGroupUser {
	_edit: boolean;
	_remove: boolean;
	_test: boolean;

	nonPaidSeconds: number;
	avatar: any;
	categoryPermissionsWithName: CategoryPermissionsWithName[];

	isTestingPermissions: boolean;
	invoices: IInvoiceModelGraphql[];
	userGroups: IUserGroupModelGraphql[];
}
