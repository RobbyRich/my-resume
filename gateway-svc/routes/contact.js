const express = require("express");
const router = express.Router();
const notifySvc = require("../msging/notifySvc");

router.post("/", async (req, res) => {
  const Name = req.body.name || "";
  const Email = req.body.email || "";
  const Message = req.body.message || "";
  let response = await notifySvc.send({
    Name,
    Email,
    Message
  });
  res.send(response);
});

module.exports = {
  router
}