import { ICategoryModelGraphql, ICategoryModel } from "./models/Category";
import { ICustomerModelGraphql, ICustomerModel } from "./models/Customer";
import {
  IFieldModelGraphql,
  IFieldModel,
  IFieldOption,
  IFieldOptionGroup,
} from "./models/Field";
import { IGroupModelGraphql, IGroupModel } from "./models/Group";
import { IInvoiceModelGraphql, IInvoiceModel } from "./models/Invoice";
import { IJobModelGraphql, IJobModel, IJobFieldValue } from "./models/Job";
import { IMachineModelGraphql, IMachineModel } from "./models/Machine";
import {
  IPrintTemplateModelGraphql,
  IPrintTemplateModel,
} from "./models/PrintTemplate";
import { IUserModelGraphql } from "./models/User";
import { IUserGroupModelGraphql, IUserGroupModel } from "./models/UserGroup";

export default interface Mutations {
  categoryCreate: {
    response: ICategoryModelGraphql;
    variables: {
      record: Partial<ICategoryModel>;
    };
  };
  categoryUpdate: {
    response: ICategoryModelGraphql;
    variables: {
      record: Partial<ICategoryModel>;
    };
  };

  customerCreate: {
    response: ICustomerModelGraphql;
    variables: {
      record: Partial<ICustomerModel>;
    };
  };
  customerUpdate: {
    response: ICustomerModelGraphql;
    variables: {
      record: Partial<ICustomerModel>;
    };
  };

  fieldCreate: {
    response: IFieldModelGraphql;
    variables: {
      record: Partial<IFieldModel>;
    };
  };
  fieldUpdate: {
    response: IFieldModelGraphql;
    variables: {
      record: Partial<IFieldModel>;
    };
  };
  fieldOptionOperation: {
    response: IFieldModelGraphql;
    variables: Partial<IFieldOption> & { longevity: string; fieldId: string };
  };
  fieldOptionInactive: {
    response: IFieldModelGraphql;
    variables: {
      optionId: string;
      fieldId: string;
    };
  };

  fieldOptionGroupOperation: {
    response: IFieldModelGraphql;
    variables: Partial<IFieldOptionGroup>;
  };

  groupCreate: {
    response: IGroupModelGraphql;
    variables: {
      record: Partial<IGroupModel>;
    };
  };
  groupUpdate: {
    response: IGroupModelGraphql;
    variables: {
      record: Partial<IGroupModel>;
    };
  };

  invoiceCreate: {
    response: IInvoiceModelGraphql;
    variables: {
      record: Partial<IInvoiceModel>;
    };
  };

  invoicePay: {
    response: IInvoiceModelGraphql;
    variables: {
      record: Partial<IInvoiceModel>;
    };
  };

  invoiceBill: {
    response: IInvoiceModelGraphql;
    variables: {
      record: Partial<IInvoiceModel>;
    };
  };

  jobCreate: {
    response: IJobModelGraphql[];
    variables: {
      record: Partial<IJobModel>;
    };
  };
  jobUpdate: {
    response: IJobModelGraphql;
    variables: {
      record: Partial<IJobModel>;
    };
  };
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

  machineCreate: {
    response: IMachineModelGraphql;
    variables: {
      record: Partial<IMachineModel>;
    };
  };
  machineUpdate: {
    response: IMachineModelGraphql;
    variables: {
      record: Partial<IMachineModel>;
    };
  };

  printTemplateCreate: {
    response: IPrintTemplateModelGraphql;
    variables: {
      record: Partial<IPrintTemplateModel>;
    };
  };
  printTemplateUpdate: {
    response: IPrintTemplateModelGraphql;
    variables: {
      record: Partial<IPrintTemplateModel>;
    };
  };

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

  userGroupCreate: {
    response: IUserGroupModelGraphql;
    variables: {
      record: Partial<IUserGroupModel>;
    };
  };
  userGroupUpdate: {
    response: IUserGroupModelGraphql;
    variables: {
      record: Partial<IUserGroupModel>;
    };
  };
  userGroupTest: {
    response: boolean;
    variables: {
      recordId: string;
    };
  };
}
