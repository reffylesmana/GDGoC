console.log("-- Latihan Penjaga Zootopia --");

let pelari = [
  { nama: "Judy Hopps", jarak: 3 },
  { nama: "Nick Wilde", jarak: 2 }
];

let totalHari = 5;

// Judul
console.log("Jarak per hari");

// Loop per hari
for (let hari = 1; hari <= totalHari; hari++) {
  console.log("---");
  console.log("Hari " + hari);

  for (let i = 0; i < pelari.length; i++) {
    console.log(pelari[i].nama + " " + pelari[i].jarak + " km");
  }
}

// Total
console.log("---");
console.log("Total jarak selama 5 hari");

for (let i = 0; i < pelari.length; i++) {
  let total = pelari[i].jarak * totalHari;
  console.log(pelari[i].nama + " " + total + " km");
}
