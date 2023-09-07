package entity

import (
	"time"

	"gorm.io/gorm"
)

type Request struct {
	gorm.Model

	Note           string
	DateOfRequest  string
	TimeOfRequest  time.Time
	DateOfApproved string
	TimeOfApproved time.Time

	StatusID *uint
	Status Status `gorm:"foreignKey:StatusID"`
}
