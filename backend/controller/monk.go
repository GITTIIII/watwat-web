package controller

import (
	"net/http"

	"github.com/GITTIIII/watwat-web/entity"
	"github.com/gin-gonic/gin"
)

// POST /monk
func CreateMonk(c *gin.Context) {
	var monk entity.Monk
	var wat entity.Wat
	
	// bind เข้าตัวแปร monk
	if err := c.ShouldBindJSON(&monk); err != nil {
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

	// สร้าง Monk
	m := entity.Monk{
		Name: monk.Name,
		Birthday: monk.Birthday,
		Rank: monk.Rank,
		WatID : monk.WatID,
		Wat:    wat,
	}

	// บันทึก
	if err := entity.DB().Create(&m).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": m})
}

// GET /place/:id
func GetMonkById(c *gin.Context) {
	var monk entity.Monk
	id := c.Param("id")
	if err := entity.DB().Preload("Wat").Raw("SELECT * FROM monks WHERE id = ?", id).Find(&monk).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": monk})
}

// GET /monk
func ListMonk(c *gin.Context) {
	var monk []entity.Monk
	if err := entity.DB().Preload("Wat").Raw("SELECT * FROM monks").Find(&monk).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": monk})
}

// DELETE /monk/:id
func DeleteMonk(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM monks WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "monk not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /monk
func UpdateMonk(c *gin.Context) {
	var monk entity.Monk
	var result entity.Monk

	if err := c.ShouldBindJSON(&monk); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา member ด้วย id
	if tx := entity.DB().Where("id = ?", monk.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}

	if err := entity.DB().Save(&monk).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": monk})
}
