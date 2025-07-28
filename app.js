const dbUser = "seyhan40";
const dbPass = "Seyhan_2025!"; // az önce belirlediğin şifre

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@sessizcluster.g0istza.mongodb.net/sessizsinyal?retryWrites=true&w=majority&appName=SessizCluster`)
  .then(() => console.log("✅ MongoDB bağlantısı başarılı"))
  .catch((err) => console.error("❌ MongoDB bağlantı hatası:", err));