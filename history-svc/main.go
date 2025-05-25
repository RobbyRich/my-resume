package main

import (
	"history-svc/data"
	"history-svc/experiences"
	"history-svc/msging"
	"history-svc/projects"
	"history-svc/skills"
)

func main() {
	data.Collection("")
	msging.Listen(onMessage)
}

func onMessage(req msging.Request) msging.Response {
	res := msging.Response{}

	switch req.MessageType {
	case "getSkills":
		res.Result = skills.GetSkills()
		res.Success = true
	case "getProjects":
		res.Result = projects.GetProjects()
		res.Success = true
	case "getExperiences":
		res.Result = experiences.GetExperience()
		res.Success = true
	}
	return res
}
