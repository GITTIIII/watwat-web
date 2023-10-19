package controller

import (
	"net/http"

	"github.com/GITTIIII/watwat-web/entity"
	"github.com/gin-gonic/gin"
)

// POST /item
func CreateItem(c *gin.Context) {
	var item entity.Item
	var status entity.Status
	var wat entity.Wat
	
	// bind เข้าตัวแปร item
	if err := c.ShouldBindJSON(&item); err != nil {
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

	// สร้าง Item
	i := entity.Item{
		Name: item.Name,
		Amount: item.Amount,
		StatusID : item.StatusID,
		Status:    status,
		WatID : item.WatID,
		Wat:    wat,
	}

	// บันทึก
	if err := entity.DB().Create(&i).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": i})
}

// GET /item/:id
func GetItemById(c *gin.Context) {
	var item entity.Item
	id := c.Param("id")
	if err := entity.DB().Preload("Status").Preload("Wat").Raw("SELECT * FROM items WHERE id = ?", id).Find(&item).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": item})
}

// GET /item
func ListItem(c *gin.Context) {
	var item []entity.Item
	if err := entity.DB().Preload("Status").Preload("Wat").Raw("SELECT * FROM items").Find(&item).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": item})
}

// DELETE /item/:id
func DeleteItem(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM items WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "item not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /item
func UpdateItem(c *gin.Context) {
	var item entity.Item
	var result entity.Item

	if err := c.ShouldBindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา member ด้วย id
	if tx := entity.DB().Where("id = ?", item.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "item not found"})
		return
	}

	if err := entity.DB().Save(&item).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": item})
}
