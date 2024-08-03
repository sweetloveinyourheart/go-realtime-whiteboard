package server

import (
	"github.com/gofiber/fiber/v2"

	"whiteboard-server/internal/database"
)

type FiberServer struct {
	*fiber.App

	db database.Service
}

func New() *FiberServer {
	server := &FiberServer{
		App: fiber.New(fiber.Config{
			ServerHeader: "whiteboard-server",
			AppName:      "whiteboard-server",
		}),

		db: database.New(),
	}

	return server
}
