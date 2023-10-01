package entity

import (
	"gorm.io/gorm"

)

type Place struct {
	gorm.Model
	PlaceName  string `gorm:"uniqueIndex"`

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	WatID   *uint
	Wat Wat `gorm:"foreignKey:WatID"`

	PlaceUsePlaces []PlaceUsePlace `gorm:"foreignKey:PlaceID"`
}