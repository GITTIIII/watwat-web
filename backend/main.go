package main

import (
	"github.com/GITTIIII/watwat-web/entity"
	"github.com/GITTIIII/watwat-web/controller"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {

	entity.SetupDatabease()
	r := gin.Default()
	r.Use(CORSMiddleware())
	// User Routes
	r.GET("/member", controller.ListMember)
	r.GET("/member/:id", controller.GetMember)
	r.POST("/member", controller.CreateMember)
	r.PATCH("/member", controller.UpdateMember)
	r.DELETE("/member/:id", controller.DeleteMember)
	r.Run("localhhost: " + PORT)
}


func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}