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
	r.GET("/wats/:id", controller.GetWatById)
	r.GET("/watNames/:name", controller.SearchWat)
	r.POST("/wats", controller.CreateWat)
	r.PATCH("/wats", controller.UpdateWat)
	r.DELETE("/wats/:id", controller.DeleteWat)
	r.GET("/watCreator/:id", controller.GetWatByCreatorID)
	
	// Events Routes
	r.GET("/events", controller.ListEvents)
	r.GET("/events/:id", controller.GetEvent)
	r.POST("/eventRequests", controller.CreateEventRequest)
	r.PATCH("/eventRequests", controller.UpdateEventRequests)
	r.DELETE("/eventRequests/:id", controller.DeleteEvent)
	
	// Places Routes
	r.GET("/places", controller.ListPlace)
	r.GET("/places/freePlace", controller.GetFreePlace)
	r.GET("/places/:id", controller.GetPlaceById)
	r.POST("/places", controller.CreatePlace)
	r.PATCH("/places", controller.UpdatePlace)
	r.DELETE("/places/:id", controller.DeletePlace)
	
	// Monks Routes
	r.GET("/monks", controller.ListMonk)
	r.GET("/monks/:id", controller.GetMonkById)
	r.POST("/monks", controller.CreateMonk)
	r.PATCH("/monks", controller.UpdateMonk)
	r.DELETE("/monks/:id", controller.DeleteMonk)
	
	// Items Routes
	r.GET("/items", controller.ListItem)
	r.GET("/items/:id", controller.GetItemById)
	r.POST("/items", controller.CreateItem)
	r.PATCH("/items", controller.UpdateItem)
	r.DELETE("/items/:id", controller.DeleteItem)

	// PlacesUses Routes
	r.GET("/placeUses", controller.ListPlaceUse)
	r.GET("/placeUses/byId/:id", controller.GetPlaceUseById)
	r.GET("/placeUse/recent", controller.GetRecentPlaceUse)
	r.POST("/placeUses", controller.CreatePlaceUse)
	r.PATCH("/placeUses", controller.UpdatePlaceUse)
	r.DELETE("/placeUses/:id", controller.DeletePlaceUse)

	// PlacesUsePlaces Routes
	r.GET("/", controller.ListPlaceUsePlace)
	r.GET("/placeUsePlaces/byId/:id", controller.GetPlaceUsePlaceById)
	r.POST("/placeUsePlaces", controller.CreatePlaceUsePlace)
	r.PATCH("/placeUsePlaces", controller.UpdatePlaceUsePlace)
	r.DELETE("/placeUsePlaces/:id", controller.DeletePlaceUsePlace)

	// Gender Routes
	r.GET("/eventTypes", controller.ListEventTypes)

	// Status Routes
	r.GET("/statuses", controller.ListStatus)
	r.GET("/status/:id", controller.GetStatusByID)

	// Requests Routes
	r.GET("/requests", controller.ListRequersts)
	r.GET("/requestsEvent", controller.GetRequestsEventNotNull)
	r.GET("/requests/:id", controller.GetRequestByEventID)
	r.DELETE("/requests/:id", controller.DeleteRequest) 

	r.PATCH("/requests", controller.UpdateRequestEvents)

	// host Routes
	r.POST("/hosts", controller.CreateHost)
	r.GET("/hosts/:id", controller.GetHost)
	r.DELETE("/hosts/:id", controller.DeleteHost)
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
