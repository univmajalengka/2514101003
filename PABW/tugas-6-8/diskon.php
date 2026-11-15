
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Diskon | Smart Shopping</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 25px;
            color: #333;
        }

        .container {
            width: 100%;
            max-width: 480px;
            background: #fff;
            border-radius: 20px;
            padding: 35px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .icon {
            width: 65px;
            height: 65px;
            background: #eef0ff;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            margin: 0 auto 15px;
        }

        .header h1 {
            font-size: 25px;
            color: #252b48;
            margin-bottom: 8px;
        }

        .header p {
            font-size: 14px;
            color: #888;
        }

        .discount-info {
            background: #f7f8ff;
            border-radius: 12px;
            padding: 18px;
            margin-bottom: 25px;
        }

        .discount-info h3 {
            font-size: 14px;
            color: #454d70;
            margin-bottom: 13px;
        }

        .discount-list {
            display: flex;
            justify-content: space-between;
            gap: 8px;
        }

        .discount-item {
            flex: 1;
            text-align: center;
            background: white;
            padding: 12px 5px;
            border-radius: 9px;
            border: 1px solid #e8eaff;
        }

        .discount-item strong {
            display: block;
            color: #6675e9;
            font-size: 19px;
        }

        .discount-item span {
            font-size: 11px;
            color: #999;
        }

        label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #454d70;
        }

        .input-wrapper {
            position: relative;
        }

        .currency {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-weight: bold;
            color: #777;
        }

        input[type="number"] {
            width: 100%;
            padding: 15px 15px 15px 50px;
            border: 2px solid #e5e7f0;
            border-radius: 10px;
            font-size: 16px;
            outline: none;
            transition: 0.3s;
        }

        input:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102,126,234,0.12);
        }

        button {
            width: 100%;
            margin-top: 18px;
            padding: 15px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(102,126,234,0.3);
        }

        .result {
            margin-top: 25px;
            padding: 22px;
            background: #f7f8ff;
            border-radius: 12px;
            border: 1px solid #e7eaff;
            animation: appear 0.4s ease;
        }

        .result-title {
            font-size: 14px;
            font-weight: bold;
            color: #6675e9;
            margin-bottom: 18px;
        }

        .result-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 13px;
            font-size: 14px;
            color: #777;
            gap: 10px;
        }

        .result-row strong {
            color: #333;
        }

        .discount-value {
            color: #16a36a !important;
        }

        .total {
            border-top: 1px dashed #ccc;
            padding-top: 17px;
            margin-top: 17px;
        }

        .total span {
            display: block;
            font-size: 13px;
            color: #777;
            margin-bottom: 7px;
        }

        .total strong {
            font-size: 27px;
            color: #6675e9;
        }

        .badge {
            display: inline-block;
            background: #e1f8ed;
            color: #16965e;
            font-size: 12px;
            padding: 6px 12px;
            border-radius: 20px;
            margin-top: 12px;
            font-weight: bold;
        }

        .footer {
            text-align: center;
            font-size: 11px;
            color: #aaa;
            margin-top: 25px;
        }

        @keyframes appear {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 25px 20px;
            }

            .header h1 {
                font-size: 22px;
            }

            .total strong {
                font-size: 23px;
            }
        }
    </style>
</head>

<body>

<div class="container">

    <div class="header">
        <div class="icon">🛍️</div>
        <h1>Kalkulator Diskon</h1>
        <p>Hitung diskon belanja dan hemat uangmu!</p>
    </div>

    <div class="discount-info">
        <h3>🎯 Daftar Promo Diskon</h3>

        <div class="discount-list">
            <div class="discount-item">
                <strong>5%</strong>
                <span>Belanja ≥ 50rb</span>
            </div>

            <div class="discount-item">
                <strong>10%</strong>
                <span>Belanja ≥ 100rb</span>
            </div>

            <div class="discount-item">
                <strong>0%</strong>
                <span>Belanja < 50rb</span>
            </div>
        </div>
    </div>

    <form method="POST" action="">

        <label for="totalBelanja">
            Masukkan Total Belanja
        </label>

        <div class="input-wrapper">
            <span class="currency">Rp</span>

            <input
                type="number"
                id="totalBelanja"
                name="input_belanja"
                required
                min="0"
                step="1"
                placeholder="Contoh: 120000"
                value="<?php
                    echo isset($_POST['input_belanja'])
                    ? htmlspecialchars($_POST['input_belanja'])
                    : '';
                ?>"
            >
        </div>

        <button type="submit" name="hitung">
            Hitung Total Pembayaran →
        </button>

    </form>

    <?php

    // Fungsi untuk menghitung diskon
    function hitungDiskon($totalBelanja) {

        $diskon = 0;

        if ($totalBelanja >= 100000) {
            $diskon = 0.1 * $totalBelanja;
        } elseif ($totalBelanja >= 50000) {
            $diskon = 0.05 * $totalBelanja;
        }

        return $diskon;
    }

    // Proses perhitungan ketika tombol diklik
    if (isset($_POST['hitung'])) {

        $totalBelanja = filter_input(
            INPUT_POST,
            'input_belanja',
            FILTER_VALIDATE_INT
        );

        if ($totalBelanja !== false && $totalBelanja !== null && $totalBelanja >= 0) {

            $diskon = hitungDiskon($totalBelanja);
            $totalBayar = $totalBelanja - $diskon;

            $persentase = ($totalBelanja >= 100000)
                ? 10
                : (($totalBelanja >= 50000) ? 5 : 0);

            echo "<div class='result'>";

            echo "<div class='result-title'>";
            echo "✓ HASIL PERHITUNGAN";
            echo "</div>";

            echo "<div class='result-row'>";
            echo "<span>Total Belanja</span>";
            echo "<strong>Rp " . number_format($totalBelanja, 0, ',', '.') . "</strong>";
            echo "</div>";

            echo "<div class='result-row'>";
            echo "<span>Diskon ($persentase%)</span>";
            echo "<strong class='discount-value'>- Rp " . number_format($diskon, 0, ',', '.') . "</strong>";
            echo "</div>";

            echo "<div class='total'>";
            echo "<span>Total yang harus dibayar</span>";
            echo "<strong>Rp " . number_format($totalBayar, 0, ',', '.') . "</strong>";
            echo "</div>";

            if ($persentase > 0) {
                echo "<div class='badge'>🎉 Kamu hemat " . $persentase . "%!</div>";
            } else {
                echo "<div class='badge' style='background:#fff1df;color:#c47b19;'>";
                echo "Belum mendapatkan diskon";
                echo "</div>";
            }

            echo "</div>";

        } else {
            echo "<div class='result'>";
            echo "<strong>Input tidak valid. Masukkan nominal yang benar.</strong>";
            echo "</div>";
        }
    }

    ?>

    <div class="footer">
        Smart Shopping Calculator &copy; 2026
        <br>Belanja lebih cerdas, hemat lebih banyak.
    </div>

</div>

</body>
</html>
