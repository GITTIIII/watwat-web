import { EventRequestsInterface } from "./IEventRequest";
import { StatusesInterface } from "./IStatus";

export interface PlaceUsesInterface {
    ID?: number;
    UserRequestName?: string;
    DateBegin?: string;
    TimeOfBegin?: string;
    DateEnd?: string;
    TimeOfEnd?: string;
    UserTel?: string;
    Description?: string;

    EventID?: number;
    StatusID?: number;

    Event?:     EventRequestsInterface;
    Status?:     StatusesInterface;
}