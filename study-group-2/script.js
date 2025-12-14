// Arrow Function 
const greetings = (name) => console.log('Hallo ${name}, Selamat Siang');  

// Spread Operator
const dataNilai = {
  matkul: "Algoritma dan Pemrograman 1",
  nilai: 90,
  status: "Lulus"
};

const dataTambahan = {
  semester: 2,
  aktif: true
};

const dataMahasiswa = { ...dataNilai, ...dataTambahan };
console.log("Data Mahasiswa:", dataMahasiswa);