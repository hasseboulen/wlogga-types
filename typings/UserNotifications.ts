export default interface UserNotifications {
	assignedWork: number;
	categories: number;
	account: number;
	management: {
		customers: number;
		contractors: number;
		employed: number;
	};
	settings: number;
}
