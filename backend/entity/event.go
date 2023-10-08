package entity

import (
	"gorm.io/gorm"
)

type Event struct {
	gorm.Model
	EventName string
	DateBegin   string
	TimeOfBegin string
	DateEnd     string
	TimeOfEnd   string
	OutPlace    string
	UserTel     string
	Description string
	
	EventID      *uint
	ParentEvent *Event `gorm:"foreignKey:EventID"`

	EventTypeID  *uint
	EventType    EventType `gorm:"foreignKey:EventTypeID"`

	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	ChildEvents []Event    `gorm:"foreignKey:EventID"`
	Hosts       []Host     `gorm:"foreignKey:EventID"`
	Requests    []Request  `gorm:"foreignKey:EventID"`
	PlaceUses   []PlaceUse `gorm:"foreignKey:EventID"`
}
