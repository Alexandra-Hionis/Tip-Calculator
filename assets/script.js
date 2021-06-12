// Hide custom tip section & split bill section
document.getElementById("customTipSection").style.display = "none";

function calculateTip() {
  const billAmount = document.getElementById("billAmountInput").value;
  const numPeople = document.getElementById("numPeople").value;
  const myModal = document.getElementById("myModal");
  if (billAmount.length == "" || billAmount < 0 || numPeople < 0) {
    myModal.style.display = "block";
  } else {
    const calculateBtn = document.querySelector("#calculateBtn");
    calculateBtn.onclick = function () {
      const selections = document.querySelectorAll('input[name="tip"]');
      let userSelection;
      for (const selection of selections) {
        if (selection.checked) {
          // Get value of selected radio button
          userSelection = selection.value;
          break;
        }
      }
      if (numPeople >= 2) {
        // Use toFixed to make sure that the number has two digits ater the decimal
        // Currently. billAmount and tip % are strings. I converted decimal numbers to and integer, doing the math and than converting it back to a decimal number. There is bill amount and I multiplied that by 100 to make it an integer, than multiply that by tip percent times 10 to make it an integer and than divide by 1000 to get the decimal back.
        const tipAmount = (billAmount * 100 * (userSelection * 10)) / 1000;
        document.getElementById("tipAmount").innerHTML =
          "$" + tipAmount.toFixed(2);
        const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);
        document.getElementById("totalAmount").innerHTML =
          "$" + totalAmount.toFixed(2);
        const splitTip = tipAmount / numPeople;
        document.getElementById("splitTipAmount").innerHTML =
          "$" + splitTip.toFixed(2);
        const splitTotalAmount = totalAmount / numPeople;
        document.getElementById("splitTotalAmount").innerHTML =
          "$" + splitTotalAmount.toFixed(2);
      } else {
        document.getElementById("splitTipAmount").style.display = "0.00";
        document.getElementById("splitTotalAmount").style.display = "0.00";
        const tipAmount = (billAmount * 100 * (userSelection * 10)) / 1000;
        document.getElementById("tipAmount").innerHTML =
          "$" + tipAmount.toFixed(2);
        const totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);
        document.getElementById("totalAmount").innerHTML =
          "$" + totalAmount.toFixed(2);
      }
    };
  }
}

function customTip() {
  const billAmountCustomTip = document.getElementById("billAmountInputTwo")
    .value;
  const customPercentInput = document.getElementById("customPercentInput")
    .value;
  const numPeopleCustom = document.getElementById("numPeopleCustom").value;
  const myModal = document.getElementById("myModal");
  if (
    billAmountCustomTip.length == "" ||
    customPercentInput == "" ||
    billAmountCustomTip < 0 ||
    customPercentInput < 0 ||
    numPeopleCustom < 0
  ) {
    myModal.style.display = "block";
  } else if (numPeopleCustom >= 2) {
    // Divide by 100 to ensure correct %
    const tipAmount =
      (billAmountCustomTip * 100 * (customPercentInput / 100) * 10) / 1000;
    // Use toFixed to make sure that the number has two digits ater the decimal
    document.getElementById("tipAmount").innerHTML = "$" + tipAmount.toFixed(2);
    const totalAmount = parseFloat(billAmountCustomTip) + parseFloat(tipAmount);
    document.getElementById("totalAmount").innerHTML =
      "$" + totalAmount.toFixed(2);
    const splitTip = tipAmount / numPeopleCustom;
    document.getElementById("splitTipAmount").innerHTML =
      "$" + splitTip.toFixed(2);
    const splitTotalAmount = totalAmount / numPeopleCustom;
    document.getElementById("splitTotalAmount").innerHTML =
      "$" + splitTotalAmount.toFixed(2);
  } else {
    document.getElementById("splitTipAmount").style.display = "0.00";
    document.getElementById("splitTotalAmount").style.display = "0.00";
    // Use toFixed to make sure that the number has two digits ater the decimal
    // Currently. billAmount and tip % are strings. I converted decimal numbers to and integer, doing the math and than converting it back to a decimal number. There is bill amount and I multiplied that by 100 to make it an integer, than multiply that by tip percent times 10 to make it an integer and than divide by 1000 to get the decimal back.
    const tipAmount =
      (billAmountCustomTip * 100 * (customPercentInput / 100) * 10) / 1000;
    document.getElementById("tipAmount").innerHTML = "$" + tipAmount.toFixed(2);
    const totalAmount = parseFloat(billAmountCustomTip) + parseFloat(tipAmount);
    document.getElementById("totalAmount").innerHTML =
      "$" + totalAmount.toFixed(2);
  }
}

function showCustomTip() {
  document.getElementById("radioTipSection").style.display = "none";
  document.getElementById("customTipSection").style.display = "block";
}

function showSplitBill() {
  document.getElementById("totalAmountSection").style.display = "none";
  document.getElementById("SplitBillSection").style.display = "block";
}

// Refresh Page
function refreshPage() {
  window.location.reload();
}
