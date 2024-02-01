# Robert Richards - Software Architecture and Development

The following codebase contains a sample web application and backend system designed as a microservices architecture that illustrates some of my knowledge of software design, inter-service communication, deployment strategies, and various programming languages. The indvidual services are written using different programming languages.

## web-app

This is the web application written using React and Tailwind CSS.

## gateway-svc

This microservice routes external requests to internal services. It acts as a facade to hide the complexity of the underlying system from external consumers. The current implementation is Nodejs.

## history-svc

This microservice communicates with a MongoDB and returns work history information to callers. The current implementation is Go.

## notify-svc

This microservice sends notification emails about events that occur in the system. The current implementation is C# and .NET Core.