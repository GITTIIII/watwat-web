package entity

import (
	"gorm.io/gorm"

)

type Role struct {
	gorm.Model
	Rolename string `gorm:"uniqueIndex"`

	Members []Member `gorm:"foreignKey:RoleID"`
}