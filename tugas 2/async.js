async function getTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

    const data = await response.json();
    console.log("Judul Todo:", data.title);

  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

getTodo();
