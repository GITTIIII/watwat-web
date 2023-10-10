
import { StatusesInterface } from "./IStatus";
import { EventRequestsInterface } from "./IEventRequest";
import { WatsInterface } from "./IWat";

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
    Status?: StatusesInterface | null;
    WatID?: number ;
    Wat?: WatsInterface;
}