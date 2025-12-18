function buatTeh(gula) {
  return new Promise((resolve, reject) => {
    console.log("Merebus air... ☕");

    setTimeout(() => {
      if (gula === "Gula Batu") {
        resolve("Teh Gula Batu Siap");
      } else {
        reject("Maaf, gula habis");
      }
    }, 2000);
  });
}

buatTeh("Gula Batu")
  .then((hasil) => {
    console.log(hasil);
  })
  .catch((error) => {
    console.log(error);
  });
