import { MembersInterface } from "./IMember"

export interface WatsInterface {
    ID?: number
    Name?: string
	Abbot?: string
	Description?: string
	Address?: string
	Postcode?: string
	Province?: string
	District?: string
	Subdistrict?: string
    MemberID?: number;
    Member?: MembersInterface;
  }
  