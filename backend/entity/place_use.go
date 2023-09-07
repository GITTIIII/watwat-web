package entity

import (
	"time"

	"gorm.io/gorm"
)

type PlaceUse struct{
	gorm.Model

	UserRequestName string 
	DateBegin string
	TimeBegin time.Time
	DateEnd string
	TimeEnd time.Time
	Description string
	UserTel int64

	PlaceUseHasPlaceID *uint
	PlaceUseHasPlace []PlaceUseHasPlace `gorm:"foreignKey:PlaceUseID"`

	StatusID *uint
	Status Status `gorm:"foreignKey:StatusID"`
}