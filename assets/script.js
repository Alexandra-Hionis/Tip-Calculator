document.getElementById("customTipSection").style.display = "none";

function calculateTip() {
  const billAmount = document.getElementById("billAmountInput").value;
  const myModal = document.getElementById("myModal");
  if (billAmount.length == "") {
    myModal.style.display = "block";
  } else {
    const calculateBtn = document.querySelector("#calculateBtn");
    calculateBtn.onclick = function () {
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

function showDiv() {
  document.getElementById("radioTipSection").style.display = "none";
  document.getElementById("customTipSection").style.display = "block";
}

function customTip() {
  const billAmountCustomTip = document.getElementById("billAmountInputTwo")
    .value;
  const customPercentInput = document.getElementById("customPercentInput")
    .value;
  const myModal = document.getElementById("myModal");
  if (billAmountCustomTip.length == "" || customPercentInput == "") {
    myModal.style.display = "block";
  } else {
    // const calculateBtn = document.querySelector("#calculateBtn");
    // calculateBtn.onclick = function () {
    //   const selections = document.querySelectorAll('input[name="tip"]');
    //   let userSelection;
    //   for (const selection of selections) {
    //     if (selection.checked) {
    //       userSelection = selection.value;
    //       break;
    //     }
    //   }
    const tipAmount = (customPercentInput / 100) * billAmountCustomTip;
    document.getElementById("tipAmount").innerHTML = "$" + tipAmount.toFixed(2);
    const totalAmount = parseInt(billAmountCustomTip) + tipAmount;
    document.getElementById("totalAmount").innerHTML =
      "$" + totalAmount.toFixed(2);
  }
}

// Refresh Page
function refreshPage() {
  window.location.reload();
}
