package caption

type Message struct {
	ID   string `json:"id"`
	Text string `json:"text"`
}

type CaptionResponse struct {
	Message Message `json:"message"`
}