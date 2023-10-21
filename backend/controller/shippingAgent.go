package controller

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "github.com/GITTIIII/watwat-web/entity"
)

func ListShippingAgents(c *gin.Context) {
    var shippingAgents []entity.ShippingAgent
    if err := entity.DB().Raw("SELECT * FROM shipping_agents").Scan(&shippingAgents).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Record not found"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"data": shippingAgents})
}