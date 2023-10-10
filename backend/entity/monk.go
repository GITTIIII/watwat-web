package entity

import "gorm.io/gorm"


type Monk struct {
	gorm.Model
	Name string `gorm:"uniqueIndex"`
	Birthday string
	Rank string

	WatID *uint
	Wat   Wat `gorm:"foreignKeyID:WatID"`
}
