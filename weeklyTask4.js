function divideAndSort(number) {
  let str = number.toString();
  
  let result = str.replace(/0/g, '');

  return Number(result);
}
console.log(divideAndSort(5956560159466056)); 
