
import { StatusesInterface } from "./IStatus";
import { EventRequestsInterface } from "./IEventRequest";
import { WatsInterface } from "./IWat";
import { MembersInterface } from "./IMember";

export interface RequestInterface {
    ID?: number;
    Note?: string | null;
    UpdatedAt?: string;
    DateTimeOfApproved?: string;
    EventID?: number ;
    Event?: EventRequestsInterface | null;
    PlaceUseID?: number | null;
    ItemLoanID?: number | null;
    StatusID?: number ;
    Status?: StatusesInterface;
    WatID?: number ;
    Wat?: WatsInterface;
    MemberID?: number;
    Member?: MembersInterface;
}