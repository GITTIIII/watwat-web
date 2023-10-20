package entity

import (
	// "time"
	"gorm.io/gorm"

)

type Request struct {
	gorm.Model
	Note  string 
	DateTimeOfApproved string

	EventID   *uint
	Event Event `gorm:"foreignKey:EventID"`

	MemberID   *uint
	Member Member `gorm:"foreignKey:MemberID"`

	Item_Use_ID   *uint
	ItemUse ItemUse `gorm:"foreignKey:Item_Use_ID"`

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	WatID *uint
	Wat   Wat `gorm:"foreignKey:WatID"`
}