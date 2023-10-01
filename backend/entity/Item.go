package entity

import "gorm.io/gorm"

type Item struct {
	gorm.Model
	Name   string `gorm:"uniqueIndex"`
	Amount int

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	WatID *uint
	Wat   Wat `gorm:"foreignKeyID:WatID"`

	ItemLoanItems []ItemLoanItem `gorm:"foreignKey:ItemID"`
}