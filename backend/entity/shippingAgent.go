package entity

import (
	"gorm.io/gorm"
)

type ShippingAgent struct {
	gorm.Model

	Shipping_agent_name string `gorm:"uniqueIndex"`
	
	Donates []Donate `gorm:"foreignKey:ShippingAgentID"`
}