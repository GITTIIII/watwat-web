package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)

// POST /placeUsePlace
func CreatePlaceUsePlace(c *gin.Context) {
	var placeUsePlace entity.PlaceUsePlace
	var placeUse entity.PlaceUse
	var place entity.Place

	// bind เข้าตัวแปร placeUsePlace
	if err := c.ShouldBindJSON(&placeUsePlace); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	

	// สร้าง placeUsePlace
	p := entity.PlaceUsePlace{
		PlaceUseID: placeUsePlace.PlaceUseID,
		PlaceID: placeUsePlace.PlaceID,

		Place: place,
		PlaceUse: placeUse,
	}

	// บันทึก
	if err := entity.DB().Create(&p).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": p})
}

// GET /PlaceUsePlace/:id
func GetPlaceUsePlaceById(c *gin.Context) {
	var placeUsePlace entity.PlaceUsePlace
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM place_use_places WHERE id = ?", id).Find(&placeUsePlace).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": placeUsePlace})
}


// GET /placeUsePlace
func ListPlaceUsePlace(c *gin.Context) {
	var placeUsePlace []entity.PlaceUsePlace
	if err := entity.DB().Raw("SELECT * FROM place_use_places").Find(&placeUsePlace).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": placeUsePlace})
}

// DELETE /placeUsePlace/:id
func DeletePlaceUsePlace(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM place_use_places WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /placeUsePlace
func UpdatePlaceUsePlace(c *gin.Context) {
	var placeUsePlace entity.PlaceUsePlace
	var result entity.PlaceUsePlace

	if err := c.ShouldBindJSON(&placeUsePlace); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา placeUsePlace ด้วย id
	if tx := entity.DB().Where("id = ?", placeUsePlace.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}

	if err := entity.DB().Save(&placeUsePlace).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": placeUsePlace})
}
