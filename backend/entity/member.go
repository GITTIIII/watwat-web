package entity

import (
	"gorm.io/gorm"
)

type Member struct {
	gorm.Model
	Username string `gorm:"uniqueIndex"`
	Password string
	Email    string `gorm:"uniqueIndex"`
	Doc_Path string 
	Avatar	 string 
	
	RoleID   *uint
	Role Role `gorm:"foreignKey:RoleID"`

	MemberRequests []MemberRequest `gorm:"foreignKey:MemberID"`
	Donates []Donate `gorm:"foreignKey:MemberID"`
}
