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
	r.GET("/members/byId/:id", controller.GetMemberById)
	r.GET("/members/byUsername/:username", controller.GetMemberByUsername)
	r.POST("/members", controller.CreateMember)
	r.PATCH("/members", controller.UpdateMember)
	r.DELETE("/members/:id", controller.DeleteMember)

	// Role Routes
	r.GET("/roles", controller.ListRole)

	// Wat Routes
	r.GET("/wats", controller.ListWat)
	r.GET("/wats/:id", controller.GetWat)
	r.POST("/wats", controller.CreateWat)
	r.PATCH("/wats", controller.UpdateWat)
	r.DELETE("/wats/:id", controller.DeleteWat)
	
	// Events Routes
	r.GET("/events", controller.ListEvents)
	r.GET("/events/:id", controller.GetEvent)
	r.POST("/eventRequests", controller.CreateEventRequest)
	r.PATCH("/eventRequests", controller.UpdateEventRequests)
	r.DELETE("/eventRequests/:id", controller.DeleteEvent)

	// Places Routes
	r.GET("/places", controller.ListPlace)
	r.GET("/places/:id", controller.GetPlaceById)
	r.POST("/places", controller.CreatePlace)
	r.PATCH("/places", controller.UpdatePlace)
	r.DELETE("/places/:id", controller.DeletePlace)

	// PlacesUses Routes
	r.GET("/placeUses", controller.ListPlaceUse)
	r.GET("/placeUses/byId/:id", controller.GetPlaceUseById)
	r.POST("/placeUses", controller.CreatePlaceUse)
	r.PATCH("/placeUses", controller.UpdatePlaceUse)
	r.DELETE("/placeUses/:id", controller.DeletePlaceUse)

	// Gender Routes
	r.GET("/eventTypes", controller.ListEventTypes)

	// Status Routes
	r.GET("/statuses", controller.ListStatus)
	r.GET("/status/:id", controller.GetStatusByID)

	// Requests Routes
	r.GET("/requests", controller.ListRequersts)
	r.DELETE("/requests/:id", controller.DeleteRequest)
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
