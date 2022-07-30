class AlarmClock {

    constructor(){
        this.alarmCollection = [];
        this.timerId = null; 
    }

    addClock(time, callback, id) {
        if(typeof id === "undefined"){
            throw new Error('error text')
        }

        
        if (this.alarmCollection.some(call => call.id === id)){
            console.error("Такой id уже существует")
            return;
        }

        this.alarmCollection.push({time, callback, id})
        
    }   

    removeClock(id) {
        return this.alarmCollection = this.alarmCollection.filter(call => call.id !== id);      
    }

    getCurrentFormattedTime(){
        let currentDate = new Date();
        let hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        let minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`;
       
    }

    start(){

        function checkClock(alarm) {
                
                if(alarm.time === this.getCurrentFormattedTime()){
                    alarm.callback();
                }

                checkClockBinded = checkClock.bind(this);

                if(!this.timerId){
                    this.timerId = setInterval(() => this.alarmCollection.forEach(e => checkClockBinded(e)) , 1000 );
                }

        }
    }

    stop(){

        if(this.timerId){
            alarm.clearInterval(); 
            this.timerId = null; 
        }

    }

    printAlarms (){
        this.alarmCollection.forEach(element => console.log(element.id + " " + element.time));
      
    }

    clearAlarms(){
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }
}

clock = new AlarmClock();
clock.addClock("10:00", () => console.log("Подъем"), 1);
clock.addClock("10:01", () => console.log("Подъем!!!"), 2);
//clock.addClock("10:01", () => console.log("Я сказала, Подъем!!!"));
clock.addClock("10:02", () => {
console.log("Подъем!!!");
clock.clearAlarms();
clock.printAlarms();
}, 3);
clock.addClock("10:05", () => console.log("Я сказала, Подъем!!!"), 1);
clock.printAlarms();
clock.start();