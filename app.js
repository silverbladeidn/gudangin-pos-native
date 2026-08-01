const API_URL = "https://pos.goodong.id/api.php?act=product";
const BASE_IMAGE = "https://pos.goodong.id/";

const productDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart-items");

let products = [];
let cart = [];

// Ambil data dari API
async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Simpan ke variabel products
        products = data.map(item => ({
            id: Number(item.id),
            name: item.name,
            price: Number(item.price),
            //image: BASE_IMAGE + item.images,
            image: 'https://picsum.photos/300?1',
            stock: Number(item.stock_quantity),
            status: item.status
        }));

        renderProducts();

    } catch (err) {
        console.error(err);
        productDiv.innerHTML = "<p>Gagal mengambil data produk.</p>";
    }
}

function renderProducts() {

    productDiv.innerHTML = "";

    products.forEach(p => {

        productDiv.innerHTML += `

        <div class="card">

            <img src="${p.image}" alt="${p.name}">

            <div class="info">

                <h4>${p.name}</h4>

                <p>Rp ${p.price.toLocaleString('id-ID')}</p>

                <small>Stok : ${p.stock}</small>

                <div class="bottom">

                    <button
                        onclick="addCart(${p.id})"
                        ${p.stock <= 0 ? "disabled" : ""}
                    >
                        ${p.stock <= 0 ? "0" : "+"}
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

function addCart(id) {

    const product = products.find(x => x.id === id);

    if (!product) return;

    const exist = cart.find(x => x.id === id);

    if (exist) {
        exist.qty++;
    } else {
        cart.push({
            ...product,
            qty: 1
        });
    }

    renderCart();

}

function renderCart() {
    cartDiv.innerHTML = "";
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.qty;
        cartDiv.innerHTML += `
        <div class="cart-item">
            <div>
                <b>${item.qty}x</b>
                ${item.name}
            </div>
            <div>
                Rp ${(item.price * item.qty).toLocaleString('id-ID')}
            </div>
        </div>
        `;
    });

    const tax = subtotal * 0.10;
    const grand = subtotal + tax;

    document.getElementById("subtotal").innerHTML =
        "Rp " + subtotal.toLocaleString('id-ID');

    document.getElementById("tax").innerHTML =
        "Rp " + tax.toLocaleString('id-ID');

    document.getElementById("grand").innerHTML =
        "Rp " + grand.toLocaleString('id-ID');

}

loadProducts();