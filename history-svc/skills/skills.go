package skills

import (
	"context"
	"history-svc/data"

	"go.mongodb.org/mongo-driver/bson"
)

func GetSkills() []Skill {
	coll := data.Collection("skills")
	filter := bson.D{}

	cursor, err := coll.Find(context.TODO(), filter)
	if err != nil {
		panic(err)
	}
	var results []Skill
	if err = cursor.All(context.TODO(), &results); err != nil {
		panic(err)
	}
	return results
}
