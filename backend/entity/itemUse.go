package entity

import (
	"gorm.io/gorm"
)

type ItemUse struct {
	gorm.Model
	Item_Use_AmountOne int
	Item_Use_ReturnOne int

	Item_Use_AmountTwo int
	Item_Use_ReturnTwo int

	Item_Use_AmountThree int
	Item_Use_ReturnThree int

	Borrowed_Date string
	Due_Date string
	Return_Date string

	ItemUseItems []ItemUseItem `gorm:"foreignKey:Item_Use_ID"`
	Requests []Request `gorm:"foreignKey:Item_Use_ID"`
}
