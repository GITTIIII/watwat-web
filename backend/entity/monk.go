package entity

import (
	"time"

	"gorm.io/gorm"
)

type Monk struct {
	gorm.Model
	Name string `gorm:"uniqueIndex"`
	Rank string
	Dob  time.Time

	WatID *uint
	Wat   Wat `gorm:"foreignKeyID:WatID"`
}
