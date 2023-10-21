package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/GITTIIII/watwat-web/entity"
)

func CreateDonate(c *gin.Context) {
	var donate 			entity.Donate
	var wat 			entity.Wat
	var member 			entity.Member
	var shipping_agent 	entity.ShippingAgent
	var donate_status 	entity.DonateStatus

	//Bind เข้า JSON
	if err := c.ShouldBindJSON(&donate); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	//หา Entity Wat
	if tx := entity.DB().Where("id = ?", donate.WatID).First(&wat); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "gender not found"})
		return
	}


	if tx := entity.DB().Where("id = ?", donate.MemberID).First(&member); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "gender not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", donate.ShippingAgentID).First(&shipping_agent); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "gender not found"})
		return
	}

	if tx := entity.DB().Where("id = ?", donate.DonateStatusID).First(&donate_status); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "gender not found"})
		return
	}

	// สร้าง User
	d := entity.Donate{
		Thing_name:		donate.Thing_name,
		Thing_amount:	donate.Thing_amount,
		Sender_name:    donate.Sender_name,
		Send_at:		donate.Send_at,
		Shipping_id:	donate.Shipping_id,
		ShippingAgent:  shipping_agent,
		DonateStatus:   donate_status,
		Wat: 			wat,
		Member:         member,	
	}

	// บันทึก
	if err := entity.DB().Create(&d).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": d})
}

func GetDonateListFromMemID(c *gin.Context) {
	var donate []entity.Donate
	Mem_id := c.Param("id")
	if err := entity.DB().Preload("DonateStatus").Preload("ShippingAgent").Raw("SELECT * FROM donates WHERE member_id = ?", Mem_id).Find(&donate).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": donate})
}

func GetDonateListFromWatID(c *gin.Context) {
	var donate []entity.Donate
	Mem_id := c.Param("id")
	if err := entity.DB().Preload("DonateStatus").Preload("ShippingAgent").Raw("SELECT * FROM donates WHERE wat_id = ?", Mem_id).Find(&donate).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}


	c.JSON(http.StatusOK, gin.H{"data": donate})
}

func GetDonateSumFromMemberID(c *gin.Context) {
	var sum int64
	Mem_id := c.Param("id")
	if err := entity.DB().Raw("SELECT SUM(thing_amount) FROM donates WHERE member_id = ?  AND donate_status_id= ? ", Mem_id,1).Scan(&sum).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": sum})
}

func UpdateStatusReceived(c *gin.Context) {
	var donate entity.Donate
	id := c.Param("id")
	if err := entity.DB().Model(&donate).Where("id = ?", id).Update("donate_status_id", 1).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": donate})
}

func UpdateStatusDecline(c *gin.Context) {
	var donate entity.Donate
	id := c.Param("id")
	if err := entity.DB().Model(&donate).Where("id = ?", id).Update("donate_status_id", 2).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": donate})
}