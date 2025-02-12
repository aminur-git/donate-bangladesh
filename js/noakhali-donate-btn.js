document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const fundBalance = getTextStringAsNumberByID("noakhali-fund-balance");
    const getDonated = getInputStringAsNumberByID("noakhali-donate-ammount");

    const currentBalance = getTextStringAsNumberByID("current-balance");
    const historyContainer = document.getElementById("history-card-show");
    if (getDonated > 0 && getDonated < currentBalance) {
      const newBalance = currentBalance - getDonated;
      document.getElementById("current-balance").innerText = newBalance;

      const newFundBalance = fundBalance + getDonated;
      document.getElementById("noakhali-fund-balance").innerText =
        newFundBalance;

      const title = document.getElementById("noakhali-title").innerText;
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

      document.getElementById('noakhali-donate-ammount').value = '';

      return popUp("alert-success", "success-popUp-close");
    } else {
      return popUp("alert-failed", "failed-popUp-close");
    }
  });
