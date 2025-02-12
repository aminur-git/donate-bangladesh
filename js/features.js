document
  .getElementById("donation-btn")
  .addEventListener("click", function () {
    document.getElementById('donation-card-show').classList.remove('hidden');
    document.getElementById('history-card-show').classList.add('hidden');
  });

  document
  .getElementById("history-btn")
  .addEventListener("click", function () {
    document.getElementById('donation-card-show').classList.add('hidden');
    document.getElementById('history-card-show').classList.remove('hidden');
  });
