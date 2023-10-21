package controller

import (
	"fmt"
	"net/http"

	"github.com/GITTIIII/watwat-web/entity"
	"github.com/gin-gonic/gin"
)

type requestPayload struct {
	ID    *uint
	Note  string 
	DateTimeOfApproved string
	StatusID *uint

	EventID *uint
	StatusEventID *uint
}

// GET /request
func ListRequersts(c *gin.Context) {
	var requests []entity.Request
	if err := entity.DB().Raw("SELECT * FROM requests").Scan(&requests).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": requests})
}

// GET /requestEventNotNull
func GetRequestsEventNotNull(c *gin.Context) {
	var requests []entity.Request
	if err := entity.DB().Raw("SELECT * FROM requests WHERE event_id IS NOT NULL").Scan(&requests).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": requests})
}

// DELETE /request/:id
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

//for creator ไม่เกี่ยวกับระบบหลัก
// PATCH /RequestEvent
func UpdateRequestEvents(c *gin.Context) {
	var data requestPayload
	var statusRequest entity.Status
	var statusEvent entity.Status

	var existingRequest entity.Request // Added a variable to hold the existing event

	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println(data.StatusEventID);
	if tx := entity.DB().Where("id = ?", data.ID).First(&existingRequest); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "request not found"})
		return
	}

	// ค้นหา status ด้วย id // ใช้ Update Event Request
	if tx := entity.DB().Where("id = ?", data.StatusID).First(&statusRequest); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "status not found"})
		return
	}
	// // Update the fields of the existing request with the new data
	existingRequest.Note = data.Note
	existingRequest.Status = statusRequest
	existingRequest.DateTimeOfApproved = data.DateTimeOfApproved

	// Save the updated request back to the database
	if err := entity.DB().Save(&existingRequest).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var existingEvent entity.Event // Added a variable to hold the existing event
	if tx := entity.DB().Where("id = ?", data.EventID).First(&existingEvent); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "event not found"})
		return
	}
	// ค้นหา status ด้วย id // ใช้ Update Event Request
	if tx := entity.DB().Where("id = ?", data.StatusEventID).First(&statusEvent); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "status not found"})
		return
	}
	// // Update the fields of the existing request with the new data
	existingEvent.Status = statusEvent

	// Save the updated request back to the database
	if err := entity.DB().Save(&existingEvent).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": gin.H{"requestUpdated": existingRequest,"eventUpdated": existingEvent}})
}