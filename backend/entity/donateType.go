package entity

import (
	"gorm.io/gorm"
)

type DonateType struct {
	gorm.Model
	Type_name		string

	Donates []Donate `gorm:"foreignKey:DonateTypeID"`
}