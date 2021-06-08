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

// function customTip() {
//   const customTipInput = document.getElementById("customTipInput").value;
//   const section1 = document.getElementById("section1");
//   const displaySetting = section1.style.display;
//   if (displaySetting == "block") {
//     console.log("hi");
//   } else {
//   }
// }
// Refresh Page
function refreshPage() {
  window.location.reload();
}
