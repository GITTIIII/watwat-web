package controller

import (
	"net/http"

	"github.com/GITTIIII/watwat-web/entity"
	"github.com/gin-gonic/gin"
)

// POST /place
func CreatePlace(c *gin.Context) {
	var place entity.Place
	var status entity.Status
	var wat entity.Wat
	
	// bind เข้าตัวแปร place
	if err := c.ShouldBindJSON(&place); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// if tx := entity.DB().Where("id = ?", place.StatusID).First(&status); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "status not found"})
	// 	return
	// }

	// if tx := entity.DB().Where("id = ?", place.WatID).First(&wat); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "wat not found"})
	// 	return
	// }

	// สร้าง Place
	p := entity.Place{
		Name: place.Name,
		StatusID : place.StatusID,
		Status:    status,
		WatID : place.WatID,
		Wat:    wat,
	}

	// บันทึก
	if err := entity.DB().Create(&p).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": p})
}

// GET /place/:id
func GetPlaceById(c *gin.Context) {
	var place entity.Place
	id := c.Param("id")
	if err := entity.DB().Preload("Status").Preload("Wat").Raw("SELECT * FROM places WHERE id = ?", id).Find(&place).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": place})
}

// GET /place
func ListPlace(c *gin.Context) {
	var place []entity.Place
	if err := entity.DB().Preload("Status").Preload("Wat").Raw("SELECT * FROM places").Find(&place).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": place})
}

// DELETE /place/:id
func DeletePlace(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM places WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /place
func UpdatePlace(c *gin.Context) {
	var place entity.Place
	var result entity.Place

	if err := c.ShouldBindJSON(&place); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา member ด้วย id
	if tx := entity.DB().Where("id = ?", place.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}

	if err := entity.DB().Save(&place).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": place})
}
