package projects

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Project struct {
	ID          primitive.ObjectID `bson:"_id"`
	Title       string             `json:"title"`
	Description string             `json:"description"`
	Skills      []string           `json:"skills"`
}
