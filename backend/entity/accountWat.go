package entity

import (
	"time"

	"gorm.io/gorm"
)

type AccountWat struct {
	gorm.Model
	PivtureAccount string `gorm:"uniqueIndex"`
	SentAt time.Time

	WatID *uint
	Wat    Wat `gorm:"foreignKeyID:WatID"`
}
