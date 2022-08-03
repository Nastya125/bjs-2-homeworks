const addThree = (a, b, c) => a + b + c;

function cachingDecoratorNew(func) {
  let cashe = [];
 

  function wrapper(...args) {
  
      const hash = args.join(",");
      const existResult = cashe.find(casheRecord => casheRecord.hash === hash);


      if(existResult) {
        console.log("Из кэша: " + cashe[hash]);
        return "Из кэша: " + cashe[hash];
      }
  
        let value = func.call(this, ...args);
        cashe[hash] = value;

        cashe.push({hash, value});
        
      if (cashe.length > 5) { 
          cashe.shift();

      }
        
        console.log("Вычисляем: " + value);
        return "Вычисляем: " + value;

  }
  return wrapper;
}

const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); // вычисляем: 6
upgradedAddThree(1, 2, 3); // из кэша: 6
upgradedAddThree(2, 2, 3); // вычисляем: 7
upgradedAddThree(3, 2, 3); // вычисляем: 8
upgradedAddThree(4, 2, 3); // вычисляем: 9
upgradedAddThree(5, 2, 3); // вычисляем: 10
upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)


const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

function debounceDecoratorNew(func, delay) {

    let timeoutId = null; 
    let isThrottled = true;

    return function(...args){
         
        if(isThrottled){
          func.call(this, ...args);
          isThrottled = false;
        }

        clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
            func.call(this, ...args);
            isThrottled = true;
            timeoutId = null;
        }, delay);
    }
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);




function debounceDecorator2(func, delay) {
  let timeoutId = null; 
  let isThrottled = true;

  function wrapper(...args){
       
      if(isThrottled){
        func.call(this, ...args);
        isThrottled = false;
        wrapper.count++;
        return
      }

      clearTimeout(timeoutId);

          timeoutId = setTimeout(() => {
          func.call(this, ...args);
          isThrottled = true;
          wrapper.count++;
      }, delay);
  }
  wrapper.count = 0;
  return wrapper;
}
