import UserPermissions from "./UserPermissions";
import { IUserModel } from "./models/User";

export default interface GraphqlContext {
	user?: IUserModel;
	permissions?: UserPermissions;
}
