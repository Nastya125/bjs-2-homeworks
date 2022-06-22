function compareArrays(arr1, arr2) {
  let result;
  
  result = arr1.length === arr2.length && arr1.every((number, index) => arr2[index] === number);
  return result; // boolean
}



function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(number => number > 0);
  resultArr = resultArr.filter(number => number % 3 === 0);
  resultArr = resultArr.map(number => number * 10);

  return resultArr; // array
}


