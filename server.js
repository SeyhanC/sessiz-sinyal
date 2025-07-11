const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Bağlantısı Başarılı"))
  .catch(err => console.log("MongoDB Hatası:", err));

const { Schema, model } = require('mongoose');
const sinyalSchema = new Schema({
  adSoyad: String,
  mesaj: String,
  tarih: { type: Date, default: Date.now }
});
const Sinyal = model('Sinyal', sinyalSchema);

app.post('/api/sinyal', async (req, res) => {
  try {
    const yeniSinyal = new Sinyal({
      adSoyad: req.body.adSoyad,
      mesaj: req.body.mesaj
    });
    await yeniSinyal.save();
    res.status(200).json({ mesaj: 'Sinyal başarıyla kaydedildi' });
  } catch (err) {
    console.error('Kayıt hatası:', err);
    res.status(500).json({ hata: 'Sunucu hatası' });
  }
});

app.get('/', (req, res) => {
  res.send("Sessiz Sinyal API çalışıyor 🎉");
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
