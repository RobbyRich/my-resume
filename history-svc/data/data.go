package data

import (
	"context"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var connected = false
var client *mongo.Client
var err error

func Collection(name string) *mongo.Collection {
	connect()
	return client.Database("resume").Collection(name)
}

func connect() {
	if !connected {
		client, err = mongo.Connect(context.TODO(), options.Client().ApplyURI(os.Getenv(("DB_CONNECTION"))))
		if err != nil {
			panic(err)
		}
		connected = true
	}
}
