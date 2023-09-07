package entity

import (
	"gorm.io/gorm"
)

type Status struct{
	gorm.Model

	StatusName string 

	Requests []Request `gorm:"foreignKey:StatusID"`
	PlaceUses []PlaceUse `gorm:"foreignKey:StatusID"` 
}