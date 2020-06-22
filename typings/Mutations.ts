import { ICategoryModelGraphql, ICategoryModel } from "./models/Category";
import { ICustomerModelGraphql, ICustomerModel } from "./models/Customer";
import { IFieldModelGraphql, IFieldModel } from "./models/Field";
import { IFieldOption, IFieldOptionModelGraphql, FieldOptionLongevity } from "./models/FieldOption";
import { IFieldOptionGroup, IFieldOptionGroupModelGraphql } from "./models/FieldOptionGroup";
import { IGroupModelGraphql, IGroupModel } from "./models/Group";
import { IInvoiceModelGraphql, IInvoiceModel } from "./models/Invoice";
import { IJobModelGraphql, IJobModel, IJobFieldValue } from "./models/Job";
import { IMachineModelGraphql, IMachineModel } from "./models/Machine";
import { IPrintTemplateModelGraphql, IPrintTemplateModel } from "./models/PrintTemplate";
import { IUserModelGraphql } from "./models/User";
import { IUserGroupModelGraphql, IUserGroupModel } from "./models/UserGroup";
import { MongoId } from "./MongoId";

export interface Mutation<Model, ExtendModel = {}> {
	response: {
		recordId: MongoId;
		record: Model;
	};
	variables: {
		record: Partial<Model & ExtendModel>;
	};
}

export default interface Mutations {
	categoryCreate: Mutation<ICategoryModelGraphql>;
	categoryUpdate: Mutation<ICategoryModelGraphql>;

	customerCreate: Mutation<ICustomerModelGraphql>;
	customerUpdate: Mutation<ICustomerModelGraphql>;

	fieldCreate: Mutation<IFieldModelGraphql>;
	fieldUpdate: Mutation<IFieldModelGraphql>;
	fieldOptionCreate: Mutation<IFieldOptionModelGraphql, { longevity?: FieldOptionLongevity }>;
	fieldOptionUpdate: Mutation<IFieldOptionModelGraphql, { longevity?: FieldOptionLongevity }>;

	fieldOptionGroupCreate: Mutation<IFieldOptionGroupModelGraphql>;
	fieldOptionGroupUpdate: Mutation<IFieldOptionGroupModelGraphql>;

	groupCreate: Mutation<IGroupModelGraphql>;
	groupUpdate: Mutation<IGroupModelGraphql>;

	invoiceCreate: Mutation<IInvoiceModelGraphql>;
	invoicePay: Mutation<IInvoiceModelGraphql>;
	invoiceBill: Mutation<IInvoiceModelGraphql>;

	jobCreate: Mutation<IJobModelGraphql>[];
	jobUpdate: Mutation<IJobModelGraphql>;

	jobFieldUpdate: {
		response: IJobModelGraphql;
		variables: {
			recordId: string;
			fieldId: string;
			fieldValue: Partial<IJobFieldValue>;
		};
	};
	jobUpdateMany: {
		response: IJobModelGraphql[];
		variables: {
			record: Partial<IJobModel>;
			filter: Partial<IJobModel>;
		};
	};

	machineCreate: Mutation<IMachineModelGraphql>;
	machineUpdate: Mutation<IMachineModelGraphql>;

	printTemplateCreate: Mutation<IPrintTemplateModelGraphql>;
	printTemplateUpdate: Mutation<IPrintTemplateModelGraphql>;

	signup: {
		response: string;
		variables: {
			email: string;
			password: string;
			firstName: string;
			lastName: string;
		};
	};
	login: {
		response: string;
		variables: { email: string; password: string };
	};

	userChangeGroup: {
		response: IUserModelGraphql;
		variables: { groupId: string };
	};
	userJoinGroup: {
		response: IUserModelGraphql;
		variables: { inviteCode: string };
	};

	userTest: {
		response: IUserModelGraphql;
		variables: {
			recordId: string;
		};
	};
	setPassword: {
		response: IUserModelGraphql;
		variables: { token: string; password: string };
	};
	recoverAccount: {
		response: IUserModelGraphql;
		variables: { email: string };
	};

	userGroupCreate: Mutation<IUserGroupModelGraphql>;
	userGroupUpdate: Mutation<IUserGroupModelGraphql>;
	userGroupTest: {
		response: boolean;
		variables: {
			recordId: string;
		};
	};
}
