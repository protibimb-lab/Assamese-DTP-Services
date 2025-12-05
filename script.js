let currentPrice = 150;
let deliveryDays = 2;

// Price calculator
document.getElementById('pageRange').addEventListener('change', function () {
  const pages = parseInt(this.value);
  currentPrice = pages * 30;

  if(pages <= 10) deliveryDays = 2;
  else if(pages <= 50) deliveryDays = 5;
  else if(pages <= 100) deliveryDays = 7;
  else deliveryDays = 15;

  document.getElementById("priceDisplay").innerText =
    "Estimated Maximum Price: Rs. " + currentPrice;

  document.getElementById("deliveryDisplay").innerText =
    "Delivery Time: " + deliveryDays + " days";
});


// Upload Simulation
function simulateUpload() {
  let name = document.getElementById("customerName").value;

  if(name === ""){
    alert("Enter your name");
    return;
  }

  document.getElementById("uploadResult").style.display = "block";
  document.getElementById("preview").style.display = "block";

  document.getElementById("previewName").innerText = name;
  document.getElementById("previewPrice").innerText = "Rs. " + currentPrice;
  document.getElementById("payAmount").innerText = currentPrice;

  window.location.href="#preview";
}


// Payment Simulation
function simulatePayment() {
  alert("Payment successful!");
  document.getElementById("pay").style.display = "none";
  document.getElementById("download").style.display = "block";
  window.location.href="#download";
}


// Section Display
function showSection(id) {
  document.getElementById("preview").style.display = "none";
  document.getElementById(id).style.display = "block";
}

