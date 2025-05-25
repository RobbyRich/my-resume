FROM golang

WORKDIR /app

ENV DB_CONNECTION="mongodb://db:27017/"

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN apt update
RUN apt install -y libzmq3-dev
RUN go build

CMD ["./history-svc"]

EXPOSE 6000