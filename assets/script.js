function test() {
  const billAmount = document.getElementById("billAmountInput").value;
  if (billAmount.length == "") {
    console.log("empty");
  } else {
    const btn = document.querySelector("#btn");
    btn.onclick = function () {
      const selections = document.querySelectorAll('input[name="tip"]');
      let userSelection;
      for (const selection of selections) {
        if (selection.checked) {
          userSelection = selection.value;
          break;
        }
      }
      const tipAmount = userSelection * billAmount;
      document.getElementById("tipAmount").innerHTML =
        "$" + tipAmount.toFixed(2);
      const totalAmount = parseInt(billAmount) + tipAmount;
      document.getElementById("totalAmount").innerHTML =
        "$" + totalAmount.toFixed(2);
    };
  }
}

// Refresh Page
function refreshPage() {
  window.location.reload();
}
