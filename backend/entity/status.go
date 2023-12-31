package entity

import (
	"gorm.io/gorm"

)

type Status struct {
	gorm.Model
	StatusName  string  `gorm:"uniqueIndex"`

	Events []Event `gorm:"foreignKey:StatusID"`
	Requests []Request `gorm:"foreignKey:StatusID"`
	PlaceUses []PlaceUse `gorm:"foreignKey:StatusID"`
	// ItemUses []ItemUse `gorm:"foreignKey:StatusID"`
	Items []Item `gorm:"foreignKey:StatusID"`
	Places []Place `gorm:"foreignKey:StatusID"`
	
}