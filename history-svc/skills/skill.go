package skills

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Skill struct {
	ID   primitive.ObjectID `bson:"_id"`
	Name string             `json:"name"`
}
