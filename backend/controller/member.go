package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)

// POST /member
func CreateMember(c *gin.Context) {
	var member entity.Member

	// bind เข้าตัวแปร member
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// สร้าง Member
	m := entity.Member{
		Username: member.Username, // ตั้งค่าฟิลด์ Username
		Email: member.Email,  // ตั้งค่าฟิลด์ Email
		Password: member.Password,  // ตั้งค่าฟิลด์ Password    
		Doc_Path : member.Doc_Path,
		Avatar : member.Avatar,
		RoleID : member.RoleID,
	}

	// บันทึก
	if err := entity.DB().Create(&m).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": m})
}

// GET /member/:id
func GetMember(c *gin.Context) {
	var member entity.Member
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM members WHERE id = ?", id).Find(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// GET /member
func ListMember(c *gin.Context) {
	var member []entity.Member
	if err := entity.DB().Raw("SELECT * FROM members").Find(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// DELETE /member/:id
func DeleteMember(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM members WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /member
func UpdateMember(c *gin.Context) {
	var member entity.Member
	var result entity.Member

	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา member ด้วย id
	if tx := entity.DB().Where("id = ?", member.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}

	if err := entity.DB().Save(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}
