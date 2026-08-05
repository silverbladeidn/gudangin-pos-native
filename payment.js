const cart = JSON.parse(localStorage.getItem("cart")) || [];

const items = document.getElementById("items");

let subtotal = 0;

cart.forEach(item=>{

    subtotal += item.price * item.qty;

    items.innerHTML += `
    <div class="row">
        <span>${item.qty} x ${item.name}</span>
        <span>
            Rp ${(item.price*item.qty).toLocaleString('id-ID')}
        </span>
    </div>
    `;

});

const tax = subtotal * 0.10;
const grand = subtotal + tax;

document.getElementById("total").innerHTML =
"Rp "+grand.toLocaleString("id-ID");

document.getElementById("cash").addEventListener("input",function(){

    const cash = Number(this.value);

    const change = cash-grand;

    document.getElementById("change").innerHTML =
    "Rp "+change.toLocaleString("id-ID");

});

function finishPayment(){

    const cash = Number(document.getElementById("cash").value);

    if(cash < grand){

        alert("Uang tidak cukup.");

        return;

    }

    window.print();

    localStorage.removeItem("cart");

    window.location.href="index.php";

}