package experiences

import (
	"context"
	"history-svc/data"

	"go.mongodb.org/mongo-driver/bson"
)

func GetExperience() []Experience {
	coll := data.Collection("experience")
	filter := bson.D{}

	cursor, err := coll.Find(context.TODO(), filter)
	if err != nil {
		panic(err)
	}
	var results []Experience
	if err = cursor.All(context.TODO(), &results); err != nil {
		panic(err)
	}
	return results
}
