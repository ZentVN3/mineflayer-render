const mineflayer = require("mineflayer");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Mineflayer bot đang chạy ");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Web server running");
});

const bot = mineflayer.createBot({
  host: "ripple.cryhosting.net",
  port: 25933,
  username: "ChatLGBTreal"
});

bot.on("login", () => {
  console.log("Ta đã quay trở lại, skibidiii~ ahhh~ ");
});
