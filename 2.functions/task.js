// Задание 1
let min, max, sum, avg;
function getArrayParams(arr) {
  
  al = arr.length;
 
  min = arr[al-1];
  max = arr[al-1];

    while (al--){
        if(arr[al] < min){
            min = arr[al]
        };
        if(arr[al] > max){
          max = arr[al]
      };
    };

      let array = arr
      sum = 0;
      for (let i = 0; i < array.length; i++ ){ 
        sum += array[i];
      }
      
      avg = sum / array.length; 

    }
    

              return {min: min, max: max, avg: avg };
              getArrayParams([21, 50, -5, 10])   

            

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
