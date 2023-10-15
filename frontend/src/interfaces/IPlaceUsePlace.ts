import { PlacesInterface } from "./IPlace";
import { PlaceUsesInterface } from "./IPlaceUse";

export interface PlaceUsePlacesInterface {
    ID?: number;
    PlaceUseID?: number;
    PlaceID?: number;
    

    Place?:     PlacesInterface;
    PlaceUse?:     PlaceUsesInterface;
}