package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/entity"
)

// POST /itemUse
func CreateItemUse(c *gin.Context) {
	var itemUse entity.ItemUse
	// var actionType entity.ActionType

	// bind เข้าตัวแปร itemUse
	if err := c.ShouldBindJSON(&itemUse); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	} // clear!

	// if tx := entity.DB().Where("id = ?", itemUse.Action_Status_ID).First(&actionType); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "action not found"})
	// 	return
	// } // clear!

	// สร้าง ItemUse
	m := entity.ItemUse{
		Item_Use_AmountOne:  itemUse.Item_Use_AmountOne,
		Item_Use_ReturnOne:  itemUse.Item_Use_ReturnOne,
		Item_Use_AmountTwo:  itemUse.Item_Use_AmountTwo,
		Item_Use_ReturnTwo:  itemUse.Item_Use_ReturnTwo,
		Item_Use_AmountThree:  itemUse.Item_Use_AmountThree,
		Item_Use_ReturnThree:  itemUse.Item_Use_ReturnThree,
		Borrowed_Date:    itemUse.Borrowed_Date,
		Due_Date:         itemUse.Due_Date,
		Return_Date:      itemUse.Return_Date,
	} // clear!

	// บันทึก
	if err := entity.DB().Create(&m).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	} // clear!

	c.JSON(http.StatusOK, gin.H{"data": m})
} // clear!

// GET /itemUse/:id
func GetItemUseById(c *gin.Context) {
	var itemUse entity.ItemUse
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM item_uses WHERE id = ?", id).Find(&itemUse).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": itemUse})
} // clear!

// GET /itemUse/:username

// GET /itemUse
func ListItemUse(c *gin.Context) {
	var itemUse []entity.ItemUse
	if err := entity.DB().Raw("SELECT * FROM item_uses").Find(&itemUse).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": itemUse})
} // clear!

// DELETE /itemUse/:id
func DeleteItemUse(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM item_uses WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
} // clear!

// PATCH /itemUse
func UpdateItemUse(c *gin.Context) {
	var itemUse entity.ItemUse
	var result entity.ItemUse

	if err := c.ShouldBindJSON(&itemUse); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	} // clear!
	// ค้นหา itemUse ด้วย id
	if tx := entity.DB().Where("id = ?", itemUse.ID).First(&result); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	} // clear!

	if err := entity.DB().Save(&itemUse).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	} // clear!
	c.JSON(http.StatusOK, gin.H{"data": itemUse})
} // clear!