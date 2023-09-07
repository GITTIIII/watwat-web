package entity

import(
	"gorm.io/gorm"
)

type PlaceUseHasPlace struct{
	gorm.Model

	PlaceUseID *uint 
	PlaceUse PlaceUse `gorm:"foreignKey:PlaceUseID"`
	PlaceID *uint 
	Place Place `gorm:"foreignKey:PlaceID"`
}