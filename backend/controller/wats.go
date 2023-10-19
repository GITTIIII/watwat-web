package controller

import (
	"net/http"

	"github.com/GITTIIII/watwat-web/entity"
	"github.com/gin-gonic/gin"
)

// POST /wat
func CreateWat(c *gin.Context) {
	var wat entity.Wat
	var member entity.Member
	
	// bind เข้าตัวแปร wat
	if err := c.ShouldBindJSON(&wat); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", wat.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "wat not found"})
		return
	}

	// สร้าง Wat
	w := entity.Wat{
		Name: wat.Name,
		Abbot: wat.Abbot,
		Description: wat.Description,
		Address: wat.Address,
		Postcode: wat.Postcode,
		Province: wat.Province,
		District: wat.District,
		Subdistrict: wat.Subdistrict,
		MemberID : wat.MemberID,
		Member: member,
	}

	// บันทึก
	if err := entity.DB().Create(&w).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": w})
}

// GET /wat/:id
func GetWatById(c *gin.Context) {
	var wat entity.Wat
	id := c.Param("id")
	if err := entity.DB().Preload("Member").Raw("SELECT * FROM wats WHERE id = ?", id).Find(&wat).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": wat})
}

// GET /wat
func ListWat(c *gin.Context) {
	var wat []entity.Wat
	if err := entity.DB().Preload("Member").Raw("SELECT * FROM wats").Find(&wat).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": wat})
}

// DELETE /wat/:id
func DeleteWat(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM wats WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "wat not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /wat
func UpdateWat(c *gin.Context) {
	var wat entity.Wat
	var result entity.Wat

	if err := c.ShouldBindJSON(&wat); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา wat ด้วย id
	if tx := entity.DB().Where("id = ?", wat.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "wat not found"})
		return
	}

	if err := entity.DB().Save(&wat).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": wat})
}


// GET /wat /name
func SearchWat(c *gin.Context) {
	var wat []entity.Wat
	nameWat := c.Param("name")
	if err := entity.DB().Raw("SELECT * FROM wats WHERE name LIKE ?", "%"+nameWat+"%").Find(&wat).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": wat})
}

// GET /watCreator/:id for creator
func GetWatByCreatorID(c *gin.Context) {
	var wat entity.Wat
	id := c.Param("id")
	if err := entity.DB().Preload("Member").Raw("SELECT * FROM wats WHERE member_id = ?", id).Find(&wat).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": wat})
}
