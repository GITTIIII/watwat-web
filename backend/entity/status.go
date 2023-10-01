package entity

import (
	"gorm.io/gorm"

)

type Status struct {
	gorm.Model
	Name  string 

	Events []Event `gorm:"foreignKey:StatusID"`
	Requests []Request `gorm:"foreignKey:StatusID"`
	PlaceUses []PlaceUse `gorm:"foreignKey:StatusID"`
	ItemLoans []ItemLoan `gorm:"foreignKey:StatusID"`
	Items []Item `gorm:"foreignKey:StatusID"`
	Places []Place `gorm:"foreignKey:StatusID"`
	
}