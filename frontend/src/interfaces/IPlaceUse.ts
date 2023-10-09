import { EventRequestsInterface } from "./IEventRequest";
import { EventTypesInterface } from "./IEventType";
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
    EventTypeID?: number;
    StatusID?: number;

    Event?:     EventRequestsInterface;
    EventType?:     EventTypesInterface;
    Status?:     StatusesInterface;
}