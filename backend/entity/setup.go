package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("watwat.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	database.AutoMigrate(
		&Donate{},
		&DonateStatus{},
		&Event{},
		&EventType{},
		&Host{},
		&Item{},
		&ItemUse{},
		&ItemUseItem{},
		&Member{},
		&Monk{},
		&Place{},
		&PlaceUse{},
		&PlaceUsePlace{},
		&Request{},
		&Role{},
		&ShippingAgent{},
		&Status{},
		&Wat{},
	)
	db = database

	// EventType Data
	eventType := []EventType{
		{EventTypeName: "งานแต่งงาน"},
		{EventTypeName: "ทำบุญขึ้นบ้านใหม่"},
		{EventTypeName: "ทำบุญอุทิศให้ผู้ตาย"},
		{EventTypeName: "บุญ"},
		{EventTypeName: "บุญเข้ากรรม"},
		{EventTypeName: "บุญคูณลาน"},
		{EventTypeName: "บุญข้าวจ"},
		{EventTypeName: "บุญพระเวส"},
		{EventTypeName: "บุญสงกรานต์"},
		{EventTypeName: "บุญบั้งไฟ"},
		{EventTypeName: "บุญเข้าพรรษา"},
		{EventTypeName: "บุญข้าวประดับดิน"},
		{EventTypeName: "บุญข้าวสาก"},
		{EventTypeName: "บุญออกพรรษา"},
		{EventTypeName: "บุญกฐิน"},
		{EventTypeName: "ศพ"},
		{EventTypeName: "อุปสมบท"},	
		{EventTypeName: "อื่นๆ"},	
	}

	for _, eventType := range eventType {
		db.Create(&eventType) // Assuming 'db' is your GORM database instance
	}
	statuses := []Status{
		//request
		{StatusName: "รออนุมัติ"},
		{StatusName: "อนุมัติ"},
		{StatusName: "ไม่อนุมัติ"},
		//event
		{StatusName: "รอจัดงาน"},
		{StatusName: "กำลังจัดงาน"},
		{StatusName: "จัดงานเสร็จสิ้น"},
		//placeUse
		{StatusName: "รอใช้สถานที่"},
		{StatusName: "กำลังใช้สถานที่"},
		{StatusName: "ใช้สถานที่เสร็จสิ้น"},
		//placeUse
		{StatusName: "รอยืมสิ่งของ"},
		{StatusName: "ยังไม่คืนแล้ว"}, //เมื่อยืมแล้ว
		{StatusName: "คืนแล้ว"},
		//item
		{StatusName: "กำลังใช้งาน"},
		{StatusName: "สามารถใช้งานได้"},
		{StatusName: "ไม่สามารถใช้งานได้"},

		{StatusName: "ว่าง"},
	}

	for _, statuses := range statuses {
		db.Create(&statuses) // Assuming 'db' is your GORM database instance
	}

	Role := []Role{
		{RoleName: "user"},
		{RoleName: "creator"},
		{RoleName: "admin"},
	}

	for _, roles := range Role {
		db.Create(&roles) // Assuming 'db' is your GORM database instance
	}


	Wat := []Wat{
		{Name: "Wat 1",
			Abbot:       "Abbot 1",
			Description: "Description 1",
			Address:     "Address 1",
			Postcode:    "12345",
			Province:    "Province 1",
			District:    "District 1",
			Subdistrict: "Subdistrict 1",
		},
		{Name: "Wat 2",
			Abbot:       "Abbot 2",
			Description: "Description 2",
			Address:     "Address 2",
			Postcode:    "67890",
			Province:    "Province 2",
			District:    "District 2",
			Subdistrict: "Subdistrict 2",
		},
	}

	for _, Wat := range Wat {
		db.Create(&Wat) // Assuming 'db' is your GORM database instance
	}

	Item := []Item { // phol make by mean
		{
			Name: "เก้าอี้แดง",
			Amount: 200,
		},
		{	Name: "เก้าอี้น้ำเงิน",
			Amount: 210,
		},
		{	Name: "เก้าอี้ขาว",
			Amount: 220,
		},
		{	Name: "โต๊ะขาว",
			Amount: 230,
		},
	}

	for _, Item := range Item {
		db.Create(&Item)
	}

	ShippingAgent := []ShippingAgent{
		{Shipping_agent_name: "Kerry Express"},
		{Shipping_agent_name: "Flash Express"},
		{Shipping_agent_name: "Thailand Post"},
		{Shipping_agent_name: "J&T Express"},
		{Shipping_agent_name: "DHL Express"},
	}

	for _, ShippingAgent := range ShippingAgent{
		db.Create(&ShippingAgent)
	}

	DonateStatus := []DonateStatus{
		{Status_name: "RECEIVED"},
		{Status_name: "DENIDE"},
		{Status_name: "PENDING"},
	}

	for _, DonateStatus := range DonateStatus{
		db.Create(&DonateStatus)
	}

}
