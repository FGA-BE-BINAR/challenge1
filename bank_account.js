let saldo = 10000;

function tambahSaldo() {
  let jumlah = window.prompt(
    "Masukan jumlah saldo yang ingin ditambahkan :",
    "0"
  );
  jumlah = parseFloat(jumlah);
  if (!isNaN(jumlah) && jumlah > 0) {
    saldo += jumlah;
    alert("Saldo berhasil ditambahkan. saldo anda saat ini :" + saldo);
  } else {
    alert("Saldo yang anda masukan tidak valid");
  }
}

function kurangSaldo() {
  let jumlah = window.prompt(
    "Masukan jumlah saldo yang ingin dikurangi :",
    "0"
  );
  jumlah = parseFloat(jumlah);
  if (!isNaN(jumlah) && jumlah > 0) {
    saldo -= jumlah;
    alert("Saldo berhasil dikurangi. saldo anda saat ini :" + saldo);
  } else {
    alert("Saldo yang anda masukan tidak valid");
  }
}

function main() {
  let option;
  let continueLoop = true;
  while (continueLoop) {
    option = window.prompt(
      `Selamat datang, saldo anda saat ini ${saldo}\n\n di Pilih menu : \n1. Tambah saldo\n2. Kurang Saldo\n3.Keluar dari program`,
      "1"
    );
    switch (option) {
      case "1":
        tambahSaldo();
        break;
      case "2":
        kurangSaldo();
        break;
      case "3":
        alert("Terimakasih telah berkunjung");
        continueLoop = false;
        break;
      default:
        alert("Maaf, menu yang anda pilih tidak tersedia");
    }
  }
}

main();
