package entity

import (
	// "time"
	"gorm.io/gorm"

)

type Request struct {
	gorm.Model
	Note  string 
	DateTimeOfRequest string
	DateTimeOfApproved string

	EventID   *uint
	Event Event `gorm:"foreignKey:EventID"`

	MemberID   *uint
	Member Member `gorm:"foreignKey:MemberID"`

	ItemLoanID   *uint
	ItemLoan ItemLoan `gorm:"foreignKey:ItemLoanID"`

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	WatID *uint
	Wat   Wat `gorm:"foreignKey:WatID"`
}