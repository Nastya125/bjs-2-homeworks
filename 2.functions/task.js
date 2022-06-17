// Задание 1

function getArrayParams(arr) {
  
  let min, max, sum, avg;
  al = arr.length;
  min = Infinity; 
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < al; i++ ) { 
    
      if(arr[i] < min) {
        min = arr[i]
      };
   
      if(arr[i] > max) {
        max = arr[i]
      };

      sum += arr[i];
    }
      
  avg = Number((sum / al).toFixed(2)); 
  
  return {min: min, max: max, avg: avg };
}


   
               

            

// Задание 2
function worker(arr) {
  let sum = 0;

    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }

    return sum;
}
 


function makeWork(arrOfArr, func) {
  let max;
  let la = arrOfArr.length;
  max = -Infinity;

    for (let i = 0; i < la; i++) {
      let a = func(arrOfArr[i])

        if (a > max){
          max = a;
        }
    }
  
    return max;
}






// Задание 3
function worker2(arr) {
  // Ваш код
}
