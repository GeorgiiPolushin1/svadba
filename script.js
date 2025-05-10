document.addEventListener('DOMContentLoaded', () => {
  // Указываем дату свадьбы (14 июня 2025 года, 16:00)
  const weddingTimestamp = Math.floor(new Date("2025-06-14T16:00:00").getTime() / 1000);

  // Инициализация таймера
  new FlipDown(weddingTimestamp)
    .start()
    .ifEnded(() => {
      document.getElementById("flipdown").innerHTML = "<p>Свадьба уже началась!</p>";
    });
});
