package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)


// GET /events
func ListRequersts(c *gin.Context) {
	var requests []entity.Request
	if err := entity.DB().Raw("SELECT * FROM requests").Scan(&requests).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": requests})
}