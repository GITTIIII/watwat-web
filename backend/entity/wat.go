package entity

import "gorm.io/gorm"

type Wat struct {
	gorm.Model
	Name        string
	Abbot       string
	Description string
	Address     string
	Postcode    int
	Province    string
	District    string
	Subdistrict string

	MemberID   *uint
	Member Member `gorm:"foreignKey:MemberID"`

	Places  []Place  `gorm:"foreignKeyID:WatID"`
	Items  []Item  `gorm:"foreignKeyID:WatID"`
	Monks   []Monk   `gorm:"foreignKeyID:WatID"`
	Donates []Donate `gorm:"foreignKeyID:WatID"`
	AccountWat []AccountWat `gorm:"foreignKeyID:WatID"`
}
