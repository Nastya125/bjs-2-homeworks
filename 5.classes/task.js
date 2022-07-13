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

// задача 2




class Library extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(releaseDate, pagesCount);
        this.name = name;
        this.books = [];
    }

    addBook(book){
            if(book.state > 30){
            this.books.push(book)
            }
    }

    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i++){
            if (this.books[i][type] === value){
                return this.books[i];
            }      
        }
        return null;
    }

    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i++){
            if (this.books[i].name === bookName){
                return this.books.splice(i, 1)[0];
                
            }      
        }
        return null;

    }
}




// задача 3



class Student{
    constructor(name){
        
        this.name = name;
        
    }

addMark(mark, subjectName){
    this.marks = [];

    if(mark < 1 || mark > 5) {
        return console.log("Ошибка, оценка должна быть числом от 1 до 5");
    } 
    

    if (!(this.marks[subjectName])) {
        this.marks[subjectName] = [];
    }

    this.marks[subjectName].push(mark);
      
    
}

getAverageBySubject(){
    this.sum = 0;
    for(let subjectName in this.marks){
        this.sum += this._getAverageBySubject(subjectName);
    }
    return this.sum / Object.keys(this.marks).length;
}

getAverage(){
    return this.marks.reduce((a, b) => (a + b)) / this.marks.length; 
}

exclude(reason){
    delete this.subject;
    delete this.marks; 
    return this.excluded = reason;
}
    
}    


const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
console.log(student);
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
 student.getAverage(); // Средний балл по всем предметам 4.75
 student.exclude("Исключен за попытку подделать оценки");





