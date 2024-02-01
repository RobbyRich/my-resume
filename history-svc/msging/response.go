package msging

type Response struct {
	Success bool        `json:"success"`
	Result  interface{} `json:"result"`
}
