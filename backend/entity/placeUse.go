package entity

import (
	"time"

	"gorm.io/gorm"
)

type PlaceUse struct {
	gorm.Model
	UserRequestName string
	DateBegin       string
	TimeOfBegin     time.Time
	DateEnd         string
	TimeOfEnd       time.Time
	UserTel         int64
	Description     string

	EventID *uint
	Event   Event `gorm:"foreignKey:EventID"`

	EventTypeID *uint
	EventType   EventType `gorm:"foreignKey:EventTypeID"`

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	PlaceUsePlaces []PlaceUsePlace `gorm:"foreignKey:PlaceUseID"`
}
