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

// ========================= Time Formate ======================================

function timeFormatted() {
  const date = new Date();

  // Get timezone offset in minutes
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const hoursOffset = String(Math.floor(Math.abs(offset) / 60)).padStart(
    2,
    "0"
  );
  const minutesOffset = String(Math.abs(offset) % 60).padStart(2, "0");

  // Get formatted time zone (e.g., GMT+0600)
  const timeZone = `GMT${sign}${hoursOffset}${minutesOffset}`;

  // Get formatted date and time
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // <-- Change to 12-hour format
  };

  // Format the date string
  const formattedDate = date.toLocaleString("en-US", options).replace(",", "");

  // Get full timezone name
  const timeZoneName = Intl.DateTimeFormat("en-US", { timeZoneName: "long" })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName").value;

  return `Date : ${formattedDate} ${timeZone} (${timeZoneName})`;
}

