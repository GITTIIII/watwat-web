package entity

import (
	"gorm.io/gorm"

)

type MemberRequest struct {
	gorm.Model
	
	MemberID   *uint
	Member Member `gorm:"foreignKey:MemberID"`

	RequestID  	 *uint
	Request Request `gorm:"foreignKey:RequestID"`
}