package entity

import (
	"gorm.io/gorm"

)

type Host struct {
	gorm.Model
	HostName  string 

	EventID   *uint
	Event Event `gorm:"foreignKey:EventID"`
}