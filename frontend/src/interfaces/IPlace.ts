import { StatusesInterface } from "./IStatus";
import { WatsInterface } from "./IWat";

export interface PlacesInterface {
    ID?: number;
    PlaceName?: string;
    
    StatusID?: number;  
    Status?: StatusesInterface;
    WatID?: number;
    Wat?: WatsInterface
}