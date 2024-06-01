package caption

import (
	"context"
	"fmt"
	"log"
	"os"

	// "encore.dev/app/env"
	// "encore.dev/beta/errs"
	// "encore.dev/rfy"
	openai "github.com/sashabaranov/go-openai" 
)

type CaptionRequestParams struct {
	Location string `json:"location" validate:"required,max=20"`
	Mood     string `json:"mood" validate:"required,max=20"`
	Words    string `json:"words"`
}

// type CaptionRequestParams struct {
//     Location string // location
//     Mood string // number of blog posts to skip, for pagination
// 	Words string
// }

type CaptionResponse struct {
	Caption string `json:"caption"`
}

//encore:api public method=GET path=/captions
func captionProcessor(ctx context.Context, opts CaptionRequestParams, ) (*CaptionResponse, error) {
	openaiAPIKey := os.Getenv("OPENAI_API_KEY")
	if openaiAPIKey == "" {
		log.Fatalln("OPENAI_API_KEY environment variable not set")
	}

	client := openai.NewClient(openaiAPIKey)

	resp, err := client.CreateChatCompletion(ctx, openai.ChatCompletionRequest{
		Model: openai.GPT3Dot5Turbo,
		Messages: []openai.ChatCompletionMessage{
			{
				Role:    openai.ChatMessageRoleSystem,
				Content: "You are an expert creative marketer. Create a caption for the location the user enters based on user's mood. Also include the words the user enters in the caption.",
			},
			{
				Role:    openai.ChatMessageRoleUser,
				Content: fmt.Sprintf("Location: %s Mood: %s Words: %s", opts.Location, opts.Mood, opts.Words),
			},
		},
	})
	if err != nil {
		log.Println("Error in creating campaigns from OpenAI:", err)
		return nil, err
	}

	caption := resp.Choices[0].Message.Content
	return &CaptionResponse{Caption: caption}, nil
}

// func init() {
// 	app := rfy.New()
// 	env.HandleFunc("/captions", func(ctx context.Context, req CaptionRequest) (*CaptionResponse, error) {
// 		return captionProcessor(ctx, req)
// 	})
// 	env.Start(app)
// }