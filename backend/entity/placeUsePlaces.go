package entity

import (
	"gorm.io/gorm"

)

type PlaceUsePlace struct {
	gorm.Model
	
	PlaceUseID   *uint
	PlaceUse PlaceUse `gorm:"foreignKey:PlaceUseID"`

	PlaceID  *uint
	Place Place `gorm:"foreignKey:PlaceID"`
}