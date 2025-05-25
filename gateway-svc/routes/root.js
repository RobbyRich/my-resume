const express = require("express");
const router = express.Router();
const contact = require("./contact");
const skill = require("./skill");
const project = require("./project");
const experience = require("./experience");

router.get("/status", (req, res) => {
    res.sendStatus(200);
});

router.use("/contact", contact.router);
router.use("/skill", skill.router);
router.use("/project", project.router);
router.use("/experience", experience.router);

module.exports = {
    router
}