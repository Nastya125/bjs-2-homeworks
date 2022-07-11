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

class Magazine extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
    }
}


const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15

