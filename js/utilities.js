function getTextStringAsNumberByID(id) {
  const numberIs = parseFloat(document.getElementById(id).innerText);
  return numberIs;
}

function getInputStringAsNumberByID(id) {
  const numberIs = parseFloat(document.getElementById(id).value);
  return numberIs;
}

function popUp(id, id2) {
  const close = document.getElementById(id2);
  document.getElementById(id).classList.remove("hidden");
  close.addEventListener("click", function () {
    document.getElementById(id).classList.add("hidden");
  });
}
