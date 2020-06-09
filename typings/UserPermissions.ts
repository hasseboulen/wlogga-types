import { MongoId } from "./MongoId";
import { JobPermissionLevel } from ".";

export interface CategoryPermissions {
	categoryId: MongoId;
	level: JobPermissionLevel;
}

export default interface UserPermissions {
	admin: boolean;
	categoryPermissions: CategoryPermissions[];
	isTestingPermissions: boolean;
}
