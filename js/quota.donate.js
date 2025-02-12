document
  .getElementById("quota-donate-btn")
  .addEventListener("click", function () {
    const fundBalance = getTextStringAsNumberByID("quota-fund-balance");
    const getDonated = getInputStringAsNumberByID("quota-donate-ammount");

    const currentBalance = getTextStringAsNumberByID("current-balance");
    const historyContainer = document.getElementById("history-card-show");
    if (getDonated > 0 && getDonated < currentBalance) {
      const newBalance = currentBalance - getDonated;
      document.getElementById("current-balance").innerText = newBalance;

      const newFundBalance = fundBalance + getDonated;
      document.getElementById("quota-fund-balance").innerText = newFundBalance;

      const title = document.getElementById("quota-title").innerText;
      const div = document.createElement("div");
      div.innerHTML = `     <div>
                                <h1 class="text-xl font-semibold pb-3">
                                    ${getDonated} Taka is Donated for "${title}"
                                </h1>
                                <p class="text-grayLight text-sm py-1 px-2 bg-gray-50 ">
                                ${timeFormatted()}
                                </p>
                            </div>
      `;
      div.classList.add(
        "p-8",
        "border",
        "border-gray-100",
        "rounded-2xl",
        "shadow-sm"
      );
      historyContainer.appendChild(div);
      document.getElementById('quota-donate-ammount').value = '';

      return popUp("alert-success", "success-popUp-close");
    } else {
      return popUp("alert-failed", "failed-popUp-close");
    }
  });