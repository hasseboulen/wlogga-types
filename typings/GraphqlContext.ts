import UserPermissions from "./UserPermissions";
import { IUserModel } from "./models/User";
import { IGroupModel } from "./models/Group";

export default interface GraphqlContext {
	user?: Pick<IUserModel, "_id" | "currentGroupId" | "permissions">;
	currentGroup?: Pick<IGroupModel, "_id" | "name" | "_users">;
	groups?: Pick<IGroupModel, "_id" | "name" | "_users">[];
	permissions?: UserPermissions;
}
