package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)

// GET /status/:id
func GetStatus(c *gin.Context) {
	var staus entity.Status
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM stauses WHERE id = ?", id).Scan(&staus).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": staus})
}