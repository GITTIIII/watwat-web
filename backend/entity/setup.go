package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase(){
	database, err := gorm.Open(sqlite.Open("watwat.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	database.AutoMigrate(
		&AccountWat{},
		&Donate{},
		&DonateType{},
		&Donate{},
		&Event{},
		&EventType{},
		&Host{},
		&Item{},
		&ItemLoan{},
		&ItemLoanItem{},
		&Member{},
		&Monk{},
		&Place{},
		&PlaceUse{},
		&PlaceUsePlace{},
		&Request{},
		&Role{},
		&Status{},
		&Wat{},
	)
	db = database

	// EventType Data
	eventType := []EventType{
		{EventTypeName: "บวช"},
		{EventTypeName: "เพวส"},
		{EventTypeName: "บุญ"},
		{EventTypeName: "ศพ"},
		{EventTypeName: "กฐิน"},
	}

	for _, eventType := range eventType {
		db.Create(&eventType) // Assuming 'db' is your GORM database instance
	}
	statuses := []Status{
		{StatusName: "รออนุมัติ"},
		{StatusName: "อนุมัติ"},
		{StatusName: "ไม่อนุมัติ"},
		{StatusName: "รอจัดงาน"},
		{StatusName: "จัดงานแล้ว"},
	}

	for _, statuses := range statuses {
		db.Create(&statuses) // Assuming 'db' is your GORM database instance
	}

	Role := []Role{
		{RoleName: "user"},
		{RoleName: "creator"},
		{RoleName: "admin"},
	}

	for _, Role := range Role {
		db.Create(&Role) // Assuming 'db' is your GORM database instance
	}

	

}