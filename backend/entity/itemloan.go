package entity

import (
	"gorm.io/gorm"
)

type ItemLoan struct {
	gorm.Model
	ItemLoanAmount int64
	BorrowedOfDate string
	DueOfDate string
	ReturnOfDate string
	
	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	Requests []Request `gorm:"foreignKey:ItemLoanID"`
	ItemLoanItems []ItemLoanItem `gorm:"foreignKey:ItemLoanID"`
}
