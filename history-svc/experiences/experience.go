package experiences

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Experience struct {
	ID         primitive.ObjectID `bson:"_id"`
	Company    string             `json:"company"`
	Date       string             `json:"date"`
	Title      string             `json:"title"`
	Highlights []Highlight        `json:"highlights"`
}
