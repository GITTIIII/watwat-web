package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)

// POST /member
func CreateMember(c *gin.Context) {
	var member entity.Member
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := entity.DB().Create(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// GET /member/:id
func GetMember(c *gin.Context) {
	var member entity.Member
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM member WHERE id = ?", id).Scan(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// GET /member
func ListMember(c *gin.Context) {
	var member []entity.Member
	if err := entity.DB().Raw("SELECT * FROM member").Scan(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// DELETE /member/:id
func DeleteMember(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM member WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /member
func UpdateMember(c *gin.Context) {
	var member entity.Member
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", member.ID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}

	if err := entity.DB().Save(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}
