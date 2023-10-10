import { StatusesInterface } from "./IStatus";
import { WatsInterface } from "./IWat";

export interface PlacesInterface {
  ID?: number;
  Name?: string;

  StatusID?: number;
  Status?: StatusesInterface;
  WatID?: number;
  Wat?: WatsInterface;
}
