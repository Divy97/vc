const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

const PORT = 8000;
const app = express();

const APP_ID = "24e7d5130a074991ade890963d1e5bbd";
const APP_CERTIFICATE = "cede5403fe9148c9986f1f9b7b92e8c3";
let TOKEN = null;
let CHANNEL = null;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
  res.render("lobby.ejs");
});

app.get("/lobby.ejs", (req, res) => {
  res.render("lobby.ejs");
});

app.get("/room.ejs", (req, res) => {
  res.render("room.ejs");
});

app.get("/:roomId", function (req, res) {
  res.render("room.ejs", {
    APP_ID: APP_ID,
    CHANNEL: req.params.roomId,
    TOKEN: TOKEN,
  });
});

app.post("/", (req, res) => {
  CHANNEL = req.body.channelName;
  let uid = 0;
  let role = RtcRole.PUBLISHER;
  let expireTime = 7200;
  const currentTime = Math.floor(Date.now() / 1000);
  const privilegeExpireTime = currentTime + expireTime;
  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID,
    APP_CERTIFICATE,
    CHANNEL,
    uid,
    role,
    privilegeExpireTime
  );
  TOKEN = token;
  res.redirect("/" + req.body.channelName);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});