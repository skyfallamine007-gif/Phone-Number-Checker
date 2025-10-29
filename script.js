const checkBotton = document.getElementById("check-btn");
const clearBotton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const userInput = document.getElementById("user-input");
checkBotton.addEventListener("click" , handleCheck);
clearBotton.addEventListener("click" , handleClear);

function handleCheck() {
  event.preventDefault();
  const check = userInput.value.trim();
  if (check === "") {
    alert("Please provide a phone number");
    return;
  }
  
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/;
  if (regex.test(check)) {
    resultsDiv.textContent = "Valid US number: " + check;
  } else {
    resultsDiv.textContent = "Invalid US number: " + check;
  }
}

function handleClear() {
  event.preventDefault();
      userInput.value = "";
      resultsDiv.textContent = "";
}
