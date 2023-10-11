import { EventRequestsInterface } from "./IEventRequest";

export interface HostsInterface {
    ID?: number;
    HostName?: string;
  
    EventID?: number ;
    Event?: EventRequestsInterface | null;
  }