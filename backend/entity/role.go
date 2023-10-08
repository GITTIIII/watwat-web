package entity

import (
	"gorm.io/gorm"

)

type Role struct {
	gorm.Model
	RoleName string `gorm:"uniqueIndex"`

	Members []Member `gorm:"foreignKey:RoleID"`
}