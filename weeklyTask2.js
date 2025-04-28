const getDataFromServer = (status, callback)=>{
  if(status){
    setTimeout(()=>{
      const product = [
        'product 1',
        'product 2',
        'product 3',
      ]
      callback(product,null)
    },3000)
  }else{
    const err = new Error('failed to fetch data')
    callback(null,err)    
  }
}

const processData = (data, error) => {
  try {
    if (error) {
      throw error;
    }
    console.log('Data dari server:', data);
  } catch (err) {
    console.error('Terjadi error:', err.message);
  }
};

getDataFromServer(true, processData); 