<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Pembayaran</title>

<style>

body{
    background:#f5f5f5;
    font-family:Segoe UI;
    padding:40px;
}

.box{

    max-width:600px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:15px;

}

.row{

display:flex;
justify-content:space-between;
margin:10px 0;

}

input{

width:100%;
padding:12px;
margin-top:15px;

}

button{

margin-top:15px;
padding:15px;
width:100%;
border:none;
background:#38a169;
color:white;
font-size:18px;
cursor:pointer;

}

@media print{

button,
input{

display:none;

}

body{

background:white;

}

.box{

box-shadow:none;

}

}

</style>

</head>
<body>

<div class="box">

<h2>Pembayaran</h2>

<div id="items"></div>

<hr>

<div class="row">
    <b>Total</b>
    <b id="total"></b>
</div>

<input
type="number"
id="cash"
placeholder="Uang diterima">

<div class="row">
    <span>Kembalian</span>
    <b id="change">Rp 0</b>
</div>

<button onclick="finishPayment()">
Simpan & Cetak
</button>

</div>

<div id="receipt" style="display:none;">

    <h2 style="text-align:center">
        POS GUDANGIN
    </h2>

    <p id="date"></p>

    <div id="receipt-items"></div>

    <hr>

    <div class="row">
        <span>Subtotal</span>
        <span id="sub"></span>
    </div>

    <div class="row">
        <span>Pajak</span>
        <span id="ppn"></span>
    </div>

    <div class="row">
        <b>Total</b>
        <b id="grand"></b>
    </div>

    <div class="row">
        <span>Tunai</span>
        <span id="cashText"></span>
    </div>

    <div class="row">
        <span>Kembali</span>
        <span id="changeText"></span>
    </div>

    <p style="text-align:center">
        Terima Kasih
    </p>

</div>

<script src="payment.js"></script>

</body>
</html>