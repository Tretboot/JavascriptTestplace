let balance = 1000;
let price = 0.5;

function buy() {
  if (balance >= price) {
    balance -= price;
    price = Math.random() * 0.98 + 0.01;
    document.getElementById("balance").innerHTML = balance.toFixed(2);
    document.getElementById("price").innerHTML = price.toFixed(2);
    if (balance >= 9000) {
      alert("Gewonnen!");
    }
  } else {
    alert("Nicht genug Geld!");
  }
}

function sell() {
  balance += price;
  price = Math.random() * 0.98 + 0.01;
  document.getElementById("balance").innerHTML = balance.toFixed(2);
  document.getElementById("price").innerHTML = price.toFixed(2);
}
