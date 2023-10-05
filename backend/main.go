package main

import (
	"github.com/gin-gonic/gin"
	"github.com/GITTIIII/watwat-web/controller"
	"github.com/GITTIIII/watwat-web/entity"
)

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	// Member Routes
	r.GET("/members", controller.ListMember)
	r.GET("/members/:id", controller.GetMember)
	r.POST("/members", controller.CreateMember)
	r.PATCH("/members", controller.UpdateMember)
	r.DELETE("/members/:id", controller.DeleteMember)
	// Role Routes
	r.GET("/roles", controller.ListRole)
	// Run the server
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
