package entity

import "gorm.io/gorm"

type Wat struct {
	gorm.Model
	Name        string 
	Abbot       string `gorm:"uniqueIndex"`
	Description string
	Address     string
	Postcode    string
	Province    string
	District    string
	Subdistrict string

	MemberID   *uint
	Member Member `gorm:"foreignKey:MemberID"`

	Places  []Place  `gorm:"foreignKeyID:WatID"`
	Items  []Item  `gorm:"foreignKeyID:WatID"`
	Monks   []Monk   `gorm:"foreignKeyID:WatID"`
	Donates []Donate `gorm:"foreignKeyID:WatID"`
	Requests []Request `gorm:"foreignKeyID:WatID"`
}
