package entity

import(
	"gorm.io/gorm"
)

type Place struct{
	gorm.Model
	
	PlaceName string `gorm:"uniqueIndex"`
	PlaceStatus string `gorm:"uniqueIndex"`
}