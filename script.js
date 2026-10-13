const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const damagedProduct = document.getElementById("damaged-product");
const nonconformingProduct = document.getElementById("nonconforming-product");
const delayedDispatch = document.getElementById("delayed-dispatch");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const refund = document.getElementById("refund");
const exchange = document.getElementById("exchange");
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");

function validateForm() {
  const obj = {
    'full-name': fullName.value ? true : false,
    'email': email.value.match(/^[\w]+[@][\w]+[.][\w]{3}/) ? true : false,
    'order-no': orderNo.value.match(/^[2024][\d]{9}$/) ? true: false,
    'product-code': productCode.value.match(/^[A-Za-z]{2}[\d]{2}[-][A-Za-z][\d]{3}[-][A-Za-z]{2}[\d]$/) ? true : false,
    'quantity': quantity.value > 0 && quantity.value % 1 === 0 ? true : false,
    'complaints-group': damagedProduct.checked || nonconformingProduct.checked || delayedDispatch.checked || otherComplaint.checked ? true : false,
    'complaint-description': !otherComplaint.checked  || (otherComplaint.checked && complaintDescription.value.length >= 20) ? true : false,
    'solutions-group': refund.checked || exchange.checked || otherSolution.checked ? true : false,
    'solution-description': !otherSolution.checked || (otherSolution.checked && solutionDescription.value.length >= 20) ? true : false
  }
  return obj 
}

function isValid(obj) {
  if (obj['full-name'] === true && obj['email'] === true && obj['order-no'] === true && obj['product-code'] === true && obj['quantity'] === true && obj['complaints-group'] === true && obj['complaint-description'] === true && obj['solutions-group'] === true && obj['solution-description'] === true) {
    return true;
  } else {
    return false;
  }
}

fullName.addEventListener("change", () => {
  if (validateForm()['full-name']) {
    fullName.style.borderColor = 'green';
  } else {
    fullName.style.borderColor = 'red';
  }
})

email.addEventListener("change", () => {
  if (validateForm()['email']) {
    email.style.borderColor = 'green';
  } else {
    email.style.borderColor = 'red';
  }
})

orderNo.addEventListener("change", () => {
  if (validateForm()['order-no']) {
    orderNo.style.borderColor = 'green';
  } else {
    orderNo.style.borderColor = 'red';
  }
})

productCode.addEventListener("change", () => {
  if (validateForm()['product-code']) {
    productCode.style.borderColor = 'green';
  } else {
    productCode.style.borderColor = 'red';
  }
})

quantity.addEventListener("change", () => {
  if (validateForm()['quantity']) {
    quantity.style.borderColor = 'green';
  } else {
    quantity.style.borderColor = 'red';
  }
})

complaintsGroup.addEventListener("change", () => {
  if (validateForm()['complaints-group']) {
    complaintsGroup.style.borderColor = 'green';
  } else {
    complaintsGroup.style.borderColor = 'red';
  }
})

complaintDescription.addEventListener("change", () => {
  if (validateForm()['complaint-description']) {
    complaintDescription.style.borderColor = 'green';
  } else {
    complaintDescription.style.borderColor = 'red';
  }
})

solutionsGroup.addEventListener("change", () => {
  if (validateForm()['solutions-group']) {
    solutionsGroup.style.borderColor = 'green';
  } else {
    solutionsGroup.style.borderColor = 'red';
  }
})

solutionDescription.addEventListener("change", () => {
  if (validateForm()['solution-description']) {
    solutionDescription.style.borderColor = 'green';
  } else {
    solutionDescription.style.borderColor = 'red';
  }
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  isValid(validateForm());
  if (isValid(validateForm())) {
    alert("Submitted Successfully. Thank you for your report!")
  }
})