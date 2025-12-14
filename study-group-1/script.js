console.log("--Tiket Masuk Zoo--");

let pengunjung = [{ nama: "Judy", umur: 4 },{ nama: "Joko", umur: 35 },{ nama: "sela", umur: 65 },{ nama: "zell", umur: 10 }];

let hargatiket = 50000;

// loop
for (let i = 0; i < pengunjung.length; i++) {
  let namaPengunjung = pengunjung[i].nama;
  let umurPengunjung = pengunjung[i].umur;
  let pesan = "";

  // percabangan di dalam loop
  if (umurPengunjung < 5) {
    pesan = "Free! Untuk Balita";
  } else if (umurPengunjung <= 12) {
    pesan = "Diskon 50% harga tiket: " + (hargatiket * 0.5);
  } else if (umurPengunjung >= 60) {
    pesan = "Diskon 30% harga tiket: " + (hargatiket * 0.7);
  } else {
    pesan = "Harga tiket normal: " + hargatiket;
  }

  console.log("Nama Pengunjung:", namaPengunjung);
  console.log("Umur Pengunjung:", umurPengunjung, "tahun");
  console.log("Keterangan:", pesan);
  console.log("----------------------");
}
