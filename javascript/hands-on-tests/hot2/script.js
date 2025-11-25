const calculateBtn = document.getElementById('calculateBtn');
const itemTotalSpan = document.getElementById('itemTotal');
const taxAmountSpan = document.getElementById('taxAmount');
const totalWithTaxSpan = document.getElementById('totalWithTax');
const form = document.getElementById('gameForm');

calculateBtn.addEventListener('click', onCalculate);

function onCalculate(event) {
  event?.preventDefault?.();

  //Submit button didn’t work
  const checkedGameInputs = Array.from(form.querySelectorAll('input[type="checkbox"][name="game"]:checked'));

  let gamesTotal = 0;
  checkedGameInputs.forEach(input => {
    //Parse price correctly
    const price = parseFloat(input.value) || 0;
    gamesTotal += price;
  });

  //Some radio buttons did not add price
  const editionInput = form.querySelector('input[type="radio"][name="edition"]:checked');
  const editionPrice = editionInput ? (parseFloat(editionInput.value) || 0) : 0;

  //Variable misuse
  const totalBeforeTax = gamesTotal + editionPrice;

  //Tax calculation was wrong
  const taxRate = 0.05;
  const tax = roundToTwo(totalBeforeTax * taxRate);

  //Total with tax calculation was wrong
  const totalWithTax = roundToTwo(totalBeforeTax + tax);

  itemTotalSpan.textContent = totalBeforeTax.toFixed(2);
  taxAmountSpan.textContent = tax.toFixed(2);
  totalWithTaxSpan.textContent = totalWithTax.toFixed(2);

  const today = new Date();
  const formattedDate = today.toDateString();
  const dateDiv = document.createElement('div');
  dateDiv.textContent = formattedDate;
  document.body.appendChild(dateDiv);

  checkedGameInputs.forEach(input => { input.checked = false; });

}

function roundToTwo(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
