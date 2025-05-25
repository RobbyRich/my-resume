const express = require("express");
const router = express.Router();
const historySvc = require("../msging/historySvc");

router.get("/", async (req, res) => {
  let response = await historySvc.send(historySvc.messageTypes.GET_SKILLS);
  res.send(response);
});

module.exports = {
  router
}