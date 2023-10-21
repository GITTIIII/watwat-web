package entity

import (
	"gorm.io/gorm"

)

type Donate struct {
	gorm.Model                           
	Thing_name		string
	Thing_amount	int
	Sender_name     string
	Send_at			string
	Shipping_id		string 
 
	ShippingAgentID *uint
	ShippingAgent ShippingAgent `gorm:"foreignKey:ShippingAgentID"`

	DonateStatusID *uint
	DonateStatus DonateStatus `gorm:"foreignKey:DonateStatusID"`

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	WatID *uint
	Wat   Wat `gorm:"foreignKey:WatID"`
}