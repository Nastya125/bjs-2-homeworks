class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this.state * 1.5;
        return this.state;
    }

    set state(number){
        this._state = number;
        if(this.state < 0){
            this._state = 0;
        } else if(this.state >= 100){
            this._state = 100;
        } else {
            this._state = this.state;
        }
    }

    get state(){
        return this._state; 
}
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate); //2019
  console.log(sherlock.state); //100
  sherlock.fix();
  console.log(sherlock.state); //100

