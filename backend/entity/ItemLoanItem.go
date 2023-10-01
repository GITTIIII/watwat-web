package entity

import (
	"gorm.io/gorm"
)

type ItemLoanItem struct {
	gorm.Model
	
	ItemID   *uint
	Item Item `gorm:"foreignKey:ItemID"`

	ItemLoanID   *uint
	ItemLoan ItemLoan `gorm:"foreignKey:ItemLoanID"`

}