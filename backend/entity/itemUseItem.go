package entity

import (
	"gorm.io/gorm"
)

type ItemUseItem struct {
	gorm.Model
	
	ItemID   *uint
	Item Item `gorm:"foreignKey:ItemID"`

	Item_Use_ID *uint
	Item_Use ItemUse `gorm:"foreignKey:Item_Use_ID"`

}