export default interface UserPermissions {
	admin: boolean;
	categoryIds: string[];
	categoryPermissions: string[];
	isTestingPermissions: boolean;
	userIds: string[];
}
