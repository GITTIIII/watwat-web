package main

import (
	"github.com/GITTIIII/watwat-web/entity"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {

	entity.SetupDatabease()
	r := gin.Default()

	r.Run("localhhost: " + PORT)
}
