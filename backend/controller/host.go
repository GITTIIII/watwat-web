package controller

import (
	"net/http"

	"github.com/GITTIIII/watwat-web/entity"
	"github.com/gin-gonic/gin"
)

type hostPayload struct {
	ID          *uint
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

	// ใช้สร้าง Event, Request
	StatusID *uint

	// ใช้สร้าง Host
	Hosts []string

	// ใช้สร้าง Request
	MemberID *uint
	WatID    *uint
	// StatusRequestID *uint
}
// POST /wat
func CreateHost(c *gin.Context) {
	var data hostPayload
	var event entity.Event
	
	// bind เข้าตัวแปร wat
	if err := c.ShouldBindJSON(&data); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา event ด้วย id 
	if data.ID != nil {
		if tx := entity.DB().Where("id = ?", data.ID).First(&event); tx.RowsAffected == 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "eventMain not found"})
			return
		}
	}

	for i := 0; i < len(data.Hosts); i++ {
		host := entity.Host{
			HostName: data.Hosts[i],
			EventID:  data.ID,
		}

		if err := entity.DB().Create(&host).Error; err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
	}
	var hosts []entity.Host
	if err := entity.DB().Where("event_id = ?",data.EventID).Find(&hosts).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": hosts})
}
// DELETE /host/:id
func DeleteHost(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM hosts WHERE event_id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "event_id not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// GET /event/:id
func GetHost(c *gin.Context) {
	var host entity.Host
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM hosts WHERE event_id = ?", id).Scan(&host).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": host})
}