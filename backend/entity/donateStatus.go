package entity

import (
	"gorm.io/gorm"
)

type DonateStatus struct {
	gorm.Model
	
	Status_name string `gorm:"uniqueIndex"`

	Donates []Donate `gorm:"foreignKey:DonateStatusID"`
}