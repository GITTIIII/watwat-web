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

// DELETE /events/:id
func DeleteRequest(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM requests WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "event not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// GET /request/:id
func GetRequestByEventID(c *gin.Context) {
	var request entity.Request
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM requests WHERE event_id = ?", id).Scan(&request).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": request})
}