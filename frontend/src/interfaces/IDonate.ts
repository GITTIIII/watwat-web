import { MembersInterface } from "./IMember";
import { WatsInterface } from "./IWat";
import { ShippingAgentInterface } from "./IShippingAgent";
import { DonateStatusInterface } from "./IDonateStatus";

export interface DonateInterface {
    ID?:                number;                   
	Thing_name?:		string;
	Thing_amount?:	    number;
    Sender_name?:       string;
    Send_at?:		    string;
	Shipping_agent?:	string;
	Shipping_id?:		string;

    ShippingAgentID?:   number;
	ShippingAgent?:     ShippingAgentInterface;

	DonateStatusID?:    number;   
	DonateStatus?:      DonateStatusInterface;

    MemberID?:          number;
	Member?:            MembersInterface;

    WatID?:             number;                 
	Wat?:               WatsInterface;
}