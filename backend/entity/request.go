package entity

import (
	"time"
	"gorm.io/gorm"

)

type Request struct {
	gorm.Model
	Note  string 
	DateOfRequest string 
	TimeOfRequest time.Time
	DateOfApproved string
	TimeOfApproved time.Time

	EventID   *uint
	Event Event `gorm:"foreignKey:EventID"`

	MemberID   *uint
	Member Member `gorm:"foreignKey:MemberID"`

	ItemLoanID   *uint
	ItemLoan ItemLoan `gorm:"foreignKey:ItemLoanID"`

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	MemberRequests []MemberRequest `gorm:"foreignKey:RequestID"`
}