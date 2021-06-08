function test() {
  if (billAmountInput.value.length == "") {
    console.log("empty");
  } else {
    const btn = document.querySelector("#btn");
    btn.onclick = function () {
      const selections = document.querySelectorAll('input[name="tip"]');
      let userSelection;
      for (const selection of selections) {
        const billAmount = document.getElementById("billAmountInput").value;
        if (selection.checked) {
          userSelection = selection.value;
          break;
        }
      }
      document.getElementById("tipAmount").innerHTML =
        "$" + userSelection * billAmountInput.value;
    };
  }
}
