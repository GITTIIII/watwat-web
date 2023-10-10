import { StatusesInterface } from "./IStatus";
import { WatsInterface } from "./IWat";

export interface ItemsInterface {
  ID?: number;
  Name?: string;
  Amount?: number;

  StatusID?: number;
  Status?: StatusesInterface;
  
  WatID?: number;
  Wat?: WatsInterface;
}

      