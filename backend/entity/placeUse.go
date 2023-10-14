package entity

import (

	"gorm.io/gorm"
)

type PlaceUse struct {
	gorm.Model
	UserRequestName string
	DateBegin       string 
	TimeOfBegin     string
	DateEnd         string
	TimeOfEnd       string
	UserTel         string
	Description     string

	EventID *uint
	Event   Event `gorm:"foreignKey:EventID"`

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	PlaceUsePlaces []PlaceUsePlace `gorm:"foreignKey:PlaceUseID"`
}
