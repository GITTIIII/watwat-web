package entity

import (
	"time"

	"gorm.io/gorm"
)

type Donate struct {
	gorm.Model
	SendAt         time.Time
	Status         string
	Money_amount   float64
	Bill           string
	Thing_name     string
	Thing_amount   float64
	Shipping_agent string
	Shipping_id    string
	Note           string

	MemberID *uint
	Member   Member `gorm:"foreignKey:MemberID"`

	WatID *uint
	Wat   Wat `gorm:"foreignKey:WatID"`

	DonateTypeID *uint
	DonateTypes  DonateType `gorm:"foreignKey:DonateTypeID"`
}
