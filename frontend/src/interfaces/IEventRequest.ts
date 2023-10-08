import { EventTypesInterface } from "./IEventType";
import { StatusesInterface } from "./IStatus";
export interface EventRequestsInterface {

  ID?: number;
  EventName?: string;
  DateBegin?: string;
  TimeOfBegin?: string;
  DateEnd?: string;
  TimeOfEnd?: string;
  OutPlace?: string;
  UserTel?: string;
  Description?: string | null;
  EventID?: number | null ;
  ParentEvent?: EventRequestsInterface | null;
  EventTypeID?: number;
  EventType?: EventTypesInterface;
  StatusID?: number;
  Status?: StatusesInterface;

  //ใช้สร้าง Host
  HostName?: string;
  
  //ใช้สร้าง Request
  DateTimeOfRequest?: string;
  MemberID?: number;
	WatID?: number;
}