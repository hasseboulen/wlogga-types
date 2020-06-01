import { ICategoryModelGraphql } from "./models/Category";
import { ICustomerModelGraphql } from "./models/Customer";
import { IFieldModelGraphql } from "./models/Field";
import { IGroupModelGraphql } from "./models/Group";
import { IInvoiceModelGraphql } from "./models/Invoice";
import { IMachineModelGraphql } from "./models/Machine";
import { IPrintTemplateModelGraphql } from "./models/PrintTemplate";
import { IUserModelGraphql } from "./models/User";
import UserPermissions from "./UserPermissions";
import UserNotifications from "./UserNotifications";
import { IUserGroupModelGraphql } from "./models/UserGroup";

interface CategoryQueries {
	category: ICategoryModelGraphql | null;
	categories: ICategoryModelGraphql[] | null;
}

interface CustomerQueries {
	customer: ICustomerModelGraphql | null;
	customers: ICustomerModelGraphql[] | null;
}

interface FieldQueries {
	field: IFieldModelGraphql | null;
}

interface GroupQueries {
	currentGroup: IGroupModelGraphql | null;
	groups: IGroupModelGraphql[] | null;
}

interface InvoiceQueries {
	invoice: IInvoiceModelGraphql | null;
	invoices: IInvoiceModelGraphql[] | null;
}

interface MachineQueries {
	machine: IMachineModelGraphql | null;
	machines: IMachineModelGraphql[] | null;
}

interface PrintTemplateQueries {
	printTemplate: IPrintTemplateModelGraphql | null;
	printTemplates: IPrintTemplateModelGraphql[] | null;
}

interface UserQueries {
	currentUser: IUserModelGraphql | null;
	user: IUserModelGraphql | null;
	users: IUserModelGraphql[] | null;
	contractors: IUserModelGraphql[] | null;
	employees: IUserModelGraphql[] | null;
	permissions: UserPermissions;
	notifications: UserNotifications;
}

interface UserGroupQueries {
	userGroup: IUserGroupModelGraphql | null;
	userGroups: IUserGroupModelGraphql[] | null;
}

export default interface Queries
	extends CategoryQueries,
		UserQueries,
		GroupQueries,
		FieldQueries,
		CustomerQueries,
		MachineQueries,
		InvoiceQueries,
		PrintTemplateQueries,
		UserGroupQueries {}
