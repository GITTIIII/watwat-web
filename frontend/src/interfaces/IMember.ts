import { RolesInterface } from "./IRole";

export interface MembersInterface {
    ID?: number;
    Username?: string;
    Password?: string;
    Email?:    string;
    Doc_Path?: string;
    Avatar?:	 string;
    RoleID?:   number;
    Role?:     RolesInterface;
  }
