package entity

import (
	"gorm.io/gorm"
)

type EventType struct {
	gorm.Model
	Name string `gorm:"uniqueIndex"`

	Events    []Event    `gorm:"foreignKey:EventTypeID"`
	PlaceUses []PlaceUse `gorm:"foreignKey:EventTypeID"`
}
