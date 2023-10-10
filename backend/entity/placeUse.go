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

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	PlaceUsePlaces []PlaceUsePlace `gorm:"foreignKey:PlaceUseID"`
}
