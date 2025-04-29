const fetchData = (status) => {
  return new Promise =((resolve, reject)=>{
    if(status){
      setTimeout(()=>{
        resolve("Data berhasil disimpan")
      },3000)
    }else{
      reject("Gagal mengambil data")
    }
  })
}

// ========== Penanganan menggunakan THEN - CATCH ==========

// .then digunakan untuk menangani hasil sukses (resolve) dari Promise
// .catch digunakan untuk menangani error (reject) dari Promise
fetchData(true)
  .then((result) => {
    console.log('Then-Catch Success:', result);
  })
  .catch((error) => {
    console.error('Then-Catch Error:', error);
  });

// ========== Penanganan menggunakan ASYNC - AWAIT + TRY - CATCH ==========

// async/await membuat penulisan asynchronous code terlihat seperti synchronous, lebih mudah dibaca
const getData = async (status) => {
  try {
    // await akan menunggu Promise selesai dan mengembalikan hasilnya
    const result = await fetchData(status);
    console.log('Async-Await Success:', result);
  } catch (error) {
    // jika Promise gagal (reject), langsung masuk ke blok catch
    console.error('Async-Await Error:', error);
  }
};

// Contoh pemanggilan fungsi async
getData(true);  // coba dengan true untuk success
// getData(false); // uncomment untuk mencoba error