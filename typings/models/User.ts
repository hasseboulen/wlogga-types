import { Document } from "mongoose";
import { Id, GroupId } from "./shared";
import { MongoId } from "../MongoId";
import { IInvoiceModelGraphql } from "./Invoice";
import { IGroupUser } from "./Group";
import { IUserGroupModelGraphql } from "./UserGroup";

interface IUserProfile {
	firstName: string;
	lastName: string;
	birthday: Date;
	gender: string;
	phoneNumber: string;
	avatar?: Buffer;
}

interface IUserEmail {
	address: string;
	verified: boolean;
}

export interface IUserGroupPermission extends Id, GroupId {
	categoryIds: string[];
	categoryPermissions: string[];
	admin: Boolean;
	isTestingPermissions: boolean;
}

export interface IUser extends Id {
	username: string;
	password: string;
	name: string;
	emails: IUserEmail[];
	createdAt: Date;
	updatedAt: Date;
	profile: IUserProfile;
	services: any;
	currentGroupId: MongoId;
	permissions: IUserGroupPermission[];
	locale: string;
}

export interface IUserModel extends IUser, Document {}

export interface IUserModelGraphql extends IUserModel, IGroupUser {
	_edit: boolean;
	_remove: boolean;
	_test: boolean;

	nonPaidSeconds: number;
	avatar: any;

	__typename?: string;
	isTestingPermissions: boolean;
	invoices: IInvoiceModelGraphql[];
	userGroups: IUserGroupModelGraphql[];
}
