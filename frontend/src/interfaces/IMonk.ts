import { WatsInterface } from "./IWat";

export interface MonksInterface {
  ID?: number;
  Name?: string;
  Birthday?: string;
  Rank?: string;

  WatID?: number;
  Wat?: WatsInterface;
}
