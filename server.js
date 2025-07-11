
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const messages = [];

app.post("/api/messages", (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ message: "Ad ve mesaj gereklidir." });
  }

  const newMessage = { name, message, date: new Date() };
  messages.push(newMessage);

  return res.status(200).json({ message: "Mesaj başarıyla gönderildi!" });
});

app.get("/", (req, res) => {
  res.send("Sessiz Sinyal API çalışıyor");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
