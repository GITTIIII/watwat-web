package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)


// GET /events
func ListRequersts(c *gin.Context) {
	var events []entity.Event
	if err := entity.DB().Raw("SELECT * FROM events").Scan(&events).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": events})
}