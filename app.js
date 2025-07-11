document.getElementById("sinyalForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  fetch("https://sessiz-sinyal.onrender.com/api/sinyal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Sunucu hatası");
      return response.json();
    })
    .then((data) => {
      status.textContent = "✅ Gönderildi!";
      status.style.color = "lightgreen";
    })
    .catch((error) => {
      status.textContent = "❌ Gönderilemedi: " + error.message;
      status.style.color = "red";
    });
});