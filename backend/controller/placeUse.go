package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)

// POST /placeUse
func CreatePlaceUse(c *gin.Context) {
	var placeUse entity.PlaceUse
	var event entity.Event
	var status entity.Status

	// bind เข้าตัวแปร placeUse
	if err := c.ShouldBindJSON(&placeUse); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", placeUse.EventID).First(&event); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "gender not found"})
		return
	}


	if tx := entity.DB().Where("id = ?", placeUse.StatusID).First(&status); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "gender not found"})
		return
	}

	// สร้าง placeUse
	p := entity.PlaceUse{
		UserRequestName: placeUse.UserRequestName,
		DateBegin: placeUse.DateBegin,
		TimeOfBegin: placeUse.TimeOfBegin,
		DateEnd: placeUse.DateEnd,
		TimeOfEnd: placeUse.TimeOfEnd,
		UserTel: placeUse.UserTel,
		Description: placeUse.Description,

		EventID: placeUse.EventID,
		Event:    event,
		
		StatusID: placeUse.StatusID,
		Status:    status,
	}

	// บันทึก
	if err := entity.DB().Create(&p).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": p})
}

// GET /PlaceUse/:id
func GetPlaceUseById(c *gin.Context) {
	var placeUse entity.PlaceUse
	id := c.Param("id")
	if err := entity.DB().Preload("Event").Preload("EventType").Preload("Status").Raw("SELECT * FROM place_uses WHERE id = ?", id).Find(&placeUse).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": placeUse})
}


// GET /placeUse
func ListPlaceUse(c *gin.Context) {
	var placeUse []entity.PlaceUse
	if err := entity.DB().Preload("Role").Raw("SELECT * FROM place_uses").Find(&placeUse).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": placeUse})
}

// DELETE /placeUse/:id
func DeletePlaceUse(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM place_uses WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /placeUse
func UpdatePlaceUse(c *gin.Context) {
	var placeUse entity.PlaceUse
	var result entity.PlaceUse

	if err := c.ShouldBindJSON(&placeUse); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา placeUse ด้วย id
	if tx := entity.DB().Where("id = ?", placeUse.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}

	if err := entity.DB().Save(&placeUse).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": placeUse})
}
