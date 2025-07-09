document.getElementById("tipForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values from input fields
  const bill = parseFloat(document.getElementById("bill").value);
  const tip = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);

  const resultDiv = document.getElementById("result");

  // Validation
  if (isNaN(bill) || bill <= 0) {
    resultDiv.textContent = "❌ Please enter a valid total bill.";
    return;
  }
  if (isNaN(tip) || tip < 0) {
    resultDiv.textContent = "❌ Please enter a valid tip percentage.";
    return;
  }
  if (isNaN(people) || people < 1) {
    resultDiv.textContent = "❌ Number of people must be at least 1.";
    return;
  }

  // Calculate tip and final amount
  const tipAmount = bill * (tip / 100);
  const totalBill = bill + tipAmount;
  const perPerson = (totalBill / people).toFixed(2);

  resultDiv.textContent = `✅ Each person should pay: $${perPerson}`;
});
