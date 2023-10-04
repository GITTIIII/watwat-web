import { RoleInterface } from "./IRole";

export interface MemberInterface {
    ID?: number;
    Username?: string;
    Password?: string;
    Email?:    string;
    Doc_Path?: string;
    Avatar?:	 string;
    RoleID?:   number;
    Role?:     RoleInterface;
  }
  