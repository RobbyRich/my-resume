package msging

import (
	"encoding/json"
	"fmt"

	zmq "github.com/pebbe/zmq4"
)

func Listen(onMessage func(Request) Response) {
	server, _ := zmq.NewSocket(zmq.REP)
	defer server.Close()

	addr := "tcp://*:6000"

	server.Bind(addr)

	fmt.Println("Service is listening at ", addr)
	for {
		msg, err := server.RecvBytes(0)
		if err != nil {
			break
		}
		req := Request{}
		json.Unmarshal(msg, &req)
		response := onMessage(req)
		rawResp, err := json.Marshal(response)
		if err != nil {
			break
		}
		server.SendMessage(rawResp)
	}
	fmt.Println("Interrupted")
}
