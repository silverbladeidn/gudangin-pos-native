<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>POS Kasir</title>

<link rel="stylesheet" href="style.css">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

</head>
<body>

<div class="container">

    <!-- Sidebar -->
    <aside class="sidebar">

        <div class="logo">
            POS
        </div>

        <ul>

            <li class="active">
                <i class="fa fa-cash-register"></i>
                Register
            </li>

            <li>
                <i class="fa fa-file"></i>
                Transaksi
            </li>

            <li>
                <i class="fa fa-box"></i>
                Stok
            </li>

            <li>
                <i class="fa fa-users"></i>
                Pelanggan
            </li>

            <li>
                <i class="fa fa-gear"></i>
                Pengaturan
            </li>

        </ul>

    </aside>

    <!-- Content -->
    <main class="content">

        <div class="topbar">

            <div class="tabs">
                <button class="tab active">All</button>
                <button class="tab">Kopi</button>
                <button class="tab">Makanan</button>
                <button class="tab">Minuman</button>
            </div>

            <input type="text" placeholder="Cari Produk...">

        </div>

        <div class="products" id="products"></div>

    </main>

    <!-- Cart -->
    <aside class="cart">

        <h3>Ringkasan Pesanan</h3>

        <div id="cart-items"></div>

        <hr>

        <div class="summary">

            <div>
                <span>Subtotal</span>
                <span id="subtotal">Rp 0</span>
            </div>

            <div>
                <span>Pajak (10%)</span>
                <span id="tax">Rp 0</span>
            </div>

            <div class="grand">
                <span>Total</span>
                <span id="grand">Rp 0</span>
            </div>

        </div>

        <button class="pay">
            BAYAR
        </button>

        <div class="payment">

            <button class="active">
                Tunai
            </button>

            <button>
                Kartu
            </button>

        </div>

    </aside>

</div>

<script src="app.js"></script>

</body>
</html>