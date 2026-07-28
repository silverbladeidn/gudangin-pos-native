const products = [

{
id:1,
name:"Kopi Hitam",
price:15000,
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Cafe Latte",
price:25000,
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Cappuccino",
price:23000,
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"Es Kopi Susu",
price:20000,
image:"https://picsum.photos/300?4"
},

{
id:5,
name:"Americano",
price:18000,
image:"https://picsum.photos/300?5"
},

{
id:6,
name:"Flat White",
price:24000,
image:"https://picsum.photos/300?6"
}

];

const productDiv=document.getElementById("products");
const cartDiv=document.getElementById("cart-items");

let cart=[];

products.forEach(p=>{

productDiv.innerHTML+=`

<div class="card">

<img src="${p.image}">

<div class="info">

<h4>${p.name}</h4>

<p>Rp ${p.price.toLocaleString('id-ID')}</p>

<div class="bottom">

<button onclick="addCart(${p.id})">
+
</button>

</div>

</div>

</div>

`;

});

function addCart(id){

const product=products.find(x=>x.id==id);

const exist=cart.find(x=>x.id==id);

if(exist){

exist.qty++;

}else{

cart.push({...product,qty:1});

}

renderCart();

}

function renderCart(){

cartDiv.innerHTML="";

let subtotal=0;

cart.forEach(item=>{

subtotal+=item.price*item.qty;

cartDiv.innerHTML+=`

<div class="cart-item">

<div>

<b>${item.qty}x</b>

${item.name}

</div>

<div>

Rp ${(item.price*item.qty).toLocaleString('id-ID')}

</div>

</div>

`;

});

let tax=subtotal*0.10;

let grand=subtotal+tax;

document.getElementById("subtotal").innerHTML=
"Rp "+subtotal.toLocaleString('id-ID');

document.getElementById("tax").innerHTML=
"Rp "+tax.toLocaleString('id-ID');

document.getElementById("grand").innerHTML=
"Rp "+grand.toLocaleString('id-ID');

}