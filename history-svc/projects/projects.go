package projects

import (
	"context"
	"history-svc/data"

	"go.mongodb.org/mongo-driver/bson"
)

func GetProjects() []Project {
	coll := data.Collection("projects")
	filter := bson.D{}

	cursor, err := coll.Find(context.TODO(), filter)
	if err != nil {
		panic(err)
	}
	var results []Project
	if err = cursor.All(context.TODO(), &results); err != nil {
		panic(err)
	}
	return results
}
