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
      const tipAmount = (userSelection * billAmount).toFixed(2);
      document.getElementById("tipAmount").innerHTML = "$" + tipAmount;

      document.getElementById("totalAmount").innerHTML = "$" + totalAmount;
    };
  }
}
