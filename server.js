const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Genişletilmiş CORS ayarları
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
};
app.use(cors(corsOptions));

// Render için keep-alive desteği
app.use((req, res, next) => {
  res.setHeader('Connection', 'keep-alive');
  next();
});

app.use(bodyParser.json());

const messages = [];

app.post("/api/sinyal", (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Ad ve mesaj gereklidir." });
  }

  const newMessage = { name, message, date: new Date() };
  messages.push(newMessage);

  return res.status(200).json({ success: true, message: "Mesaj başarıyla gönderildi!" });
});

app.get("/", (req, res) => {
  res.send("Sessiz Sinyal API çalışıyor 🎉");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
