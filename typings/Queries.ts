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

export default interface Queries {
  category: ICategoryModelGraphql | null;
  categories: ICategoryModelGraphql[] | null;

  customer: ICustomerModelGraphql | null;
  customers: ICustomerModelGraphql[] | null;

  field: IFieldModelGraphql | null;
  currentGroup: IGroupModelGraphql | null;
  groups: IGroupModelGraphql[] | null;

  invoice: IInvoiceModelGraphql | null;
  invoices: IInvoiceModelGraphql[] | null;

  machine: IMachineModelGraphql | null;
  machines: IMachineModelGraphql[] | null;

  printTemplate: IPrintTemplateModelGraphql | null;
  printTemplates: IPrintTemplateModelGraphql[] | null;

  currentUser: IUserModelGraphql | null;
  user: IUserModelGraphql | null;
  users: IUserModelGraphql[] | null;
  contractors: IUserModelGraphql[] | null;
  employees: IUserModelGraphql[] | null;

  permissions: UserPermissions;
  notifications: UserNotifications;

  userGroup: IUserGroupModelGraphql | null;
  userGroups: IUserGroupModelGraphql[] | null;
}
