const form = document.getElementById("calculator");
const amountRequired = document.getElementById("amount-required");
const loanTerm = document.getElementById("loanterm");
const termText = document.querySelector(".term-text");
const termSlider = document.getElementById("termslider");
const monthlyPaymentText = document.querySelector(".monthly-repayment");

function calculatePayment() {
  const principal = parseFloat(amountRequired.value) | 0;

  const termOfLoan = parseFloat(termSlider.value);

  const annualInterestRate = 19.08;

  const percentageRate = annualInterestRate / 1200;
  const lengthOfLoan = 12 * termOfLoan;
  let monthlyPayment =
    (principal * percentageRate) /
    (1 - Math.pow(1 + percentageRate, lengthOfLoan * -1));
  monthlyPayment = monthlyPayment.toFixed(2);
  if (isNaN(monthlyPayment)) {
    //document.getElementById("monthlyrepayment").innerHTML = "";
  } else {
    monthlyPaymentText.innerHTML = "£" + monthlyPayment;
  }
  termText.innerHTML = "Loan Term: " + termSlider.value + " years";
}

//form.addEventListener("submit", calculatePayment);
calculatePayment();
amountRequired.addEventListener("input", calculatePayment);
termSlider.addEventListener("input", calculatePayment);
