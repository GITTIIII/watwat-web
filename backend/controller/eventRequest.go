package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)
type eventPayload struct {
	EventName   string
	DateBegin   string
	TimeOfBegin string
	DateEnd     string
	TimeOfEnd   string
	OutPlace    string
	UserTel     string
	Description string
	EventID     *uint
	EventTypeID *uint

	// ใช้สร้าง Event,Request
	StatusID    *uint

	// ใช้สร้าง Host
	HostName    string

	// ใช้สร้าง Request
	MemberID   		*uint
	WatID 			*uint
}

// POST /Events
func CreateEventRequest(c *gin.Context) {
	var data eventPayload
	var eventType entity.EventType
	var eventMain entity.Event
	var status entity.Status

	// bind เข้าตัวแปร data ใช้สร้าง Event, Host, Request 
	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา eventType ด้วย id ใช้สร้าง Event
	if tx := entity.DB().Where("id = ?", data.EventTypeID).First(&eventType); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "eventType not found"})
		return
	}

	// ค้นหา eventMain ด้วย id ใช้สร้าง Event
	if data.EventID != nil {
		if tx := entity.DB().Where("id = ?", *data.EventID).First(&eventMain); tx.RowsAffected == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "eventMain not found"})
			return
		}
	}

	// ค้นหา status ด้วย id // ใช้สร้าง Event Request
	if tx := entity.DB().Where("id = ?", data.StatusID).First(&status); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "status not found"})
		return
	}

	event := entity.Event{
		EventName:   data.EventName,
		DateBegin:   data.DateBegin,
		TimeOfBegin: data.TimeOfBegin,
		DateEnd:     data.DateEnd,
		TimeOfEnd:   data.TimeOfEnd,
		OutPlace:    data.OutPlace,
		UserTel:     data.UserTel,
		Description: data.Description,
		EventID:     data.EventID,
		EventType:   eventType,
		Status:      status,
	}
	// บันทึก
	if err := entity.DB().Create(&event).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	host := entity.Host{
		HostName: data.HostName,
		EventID:  &event.ID,
	}

	if err := entity.DB().Create(&host).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	request := entity.Request{
		MemberID:   	data.MemberID,
		WatID: 			data.WatID,
		EventID:     	&event.ID,
		Status:      	status,
	}

	if err := entity.DB().Create(&request).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": gin.H{"event": event, "host": host}})
}

// GET /event/:id
func GetEvent(c *gin.Context) {
	var event entity.Event
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM events WHERE id = ?", id).Scan(&event).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": event})
}

// GET /events
func ListEvents(c *gin.Context) {
	var events []entity.Event
	if err := entity.DB().Raw("SELECT * FROM events").Scan(&events).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": events})
}

// DELETE /events/:id
func DeleteEvent(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM events WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "event not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /events
func UpdateEvent(c *gin.Context) {
	var event entity.Event
	if err := c.ShouldBindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", event.ID).First(&event); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "event not found"})
		return
	}

	if err := entity.DB().Save(&event).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": event})
}
