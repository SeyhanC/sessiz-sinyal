const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Bağlantısı Başarılı"))
  .catch(err => console.log("MongoDB Hatası:", err));

app.get('/', (req, res) => {
  res.send('Sessiz Sinyal API çalışıyor 🚀');
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});