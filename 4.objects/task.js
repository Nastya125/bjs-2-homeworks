function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student("Alesha", "male", 28);
let student2 = new Student("Nastusha", "female", 28);
let student3 = new Student("Olka", "female", 33);
let student4 = new Student("Alenka", "female", 10);


Student.prototype.setSubject = function (subjectName) {
  return this.subject = subjectName;
}



Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    return this.marks = [mark];
  } else {
    return this.marks.push(mark);
}
}

Student.prototype.addMarks = function (...marks) {

    return this.marks.push(...marks);

}

Student.prototype.getAverage = function (){
  return this.avg = this.marks.reduce((a, b) => (a + b)) / this.marks.length;
  
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks; 
  return this.excluded = reason;
}




