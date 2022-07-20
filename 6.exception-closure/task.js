
//task 1
function parseCount(valueForParsing){
    let result = Number.parseInt(valueForParsing);

    if((isNaN(result))){
        throw new Error("Невалидное значение");
       
    } else {
        console.log(result)
        return result;
    }
}   

function validateCount(valueParsing){

try{
    return parseCount(valueParsing);
} catch (error){
    return error;
} finally{
    
}
}

//task 2

class Triangle{
    constructor(a, b, c){
        if(a + b < c || b + c < a || a + c < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
        
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        let p2
        p2 = (this.a + this.b + this.c)*0.5;
        var s = Math.sqrt(p2 * (p2 - this.a) * (p2 - this.b) * (p2 - this.c));
        return parseFloat(s.toFixed(3));

    }
}



function getTriangle(oneSize, twoSize, threeSize){


    try{
        return new Triangle(oneSize, twoSize, threeSize);
    } catch (error){
        return new Object({
            getPerimeter(){
                return "Ошибка! Треугольник не существует";
            },

            getArea(){
                return "Ошибка! Треугольник не существует";
            }
        }
        )
        
    } finally{
        
    }
    
}


