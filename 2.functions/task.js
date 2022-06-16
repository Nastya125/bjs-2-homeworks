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

     
      sum = 0;
      for (let i = 0; i < arr.length; i++ ){ 
        sum += arr[i];
      }
      
      avg = (sum / arr.length).toFixed(2); 
      avg = Number(avg)
      
      return {min: min, max: max, avg: avg };
    }
    

   
               

            

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
