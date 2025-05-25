const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const http = require("http");
const https = require("https");
const root = require("./routes/root");
const notifySvc = require("./msging/notifySvc");
const historySvc = require("./msging/historySvc");

const app = express();

var corsOptions = {
  origin: process.env.ALLOWED_ORIGINS,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", root.router);
app.use(express.static(path.join(__dirname, process.env.WEBAPP_PATH)));
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, process.env.WEBAPP_PATH+"/index.html"));
});

let options = {
  cert: fs.readFileSync('./ssl/certificate.crt'),
  ca: fs.readFileSync('./ssl/ca_bundle.crt'),
  key: fs.readFileSync('./ssl/private.key')
};

const httpsServer = https.createServer(options, app);
httpsServer.listen(443, () => {
  console.log("gateway-svc on port 443")
  notifySvc.connect();
  historySvc.connect();
});

const httpServer = http.createServer((req, res) => {
  res.statusCode = 301;
  res.setHeader('Location', `https://${req.headers.host}${req.url}`);
  res.end();
});
httpServer.listen(80, () => console.log("gateway-svc on port 80"));
