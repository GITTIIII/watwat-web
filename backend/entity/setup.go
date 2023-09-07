package entity

import(
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB{
	return db
}

func SetupDatabase(){
	database, err := gorm.Open(sqlite.Open("sa-watwat.db"), &gorm.Config{})
	if err != nil{
		panic("Failed to connect database")
	}

	database.AutoMigrate(	
		&PlaceUseHasPlace{},
		&PlaceUse{},
		&Place{},
		&Request{},
		&Status{},
	)
	db = database
}