package msging

type Request struct {
	MessageType string `json:"messageType"`
	Payload     string `json:"payload"`
}
