package entity

import (
	"gorm.io/gorm"
)

type EventType struct {
	gorm.Model
	EventTypeName string `gorm:"uniqueIndex"`

	Events    []Event    `gorm:"foreignKey:EventTypeID"`
}
