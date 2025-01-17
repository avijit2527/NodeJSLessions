var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for Rectangle with l = " + l + " and b = " + b)
   
    rect(l,b,(err, rectangle) => {
        if(err){
            console.log("Error: " + err.message)
        }else{
            console.log("Area = " + rectangle.area() + " Perimeter = " + rectangle.perimeter())
        }
    })
    console.log("This statement is after the call rect")
}

solveRect(2,4)
solveRect(3,5)
solveRect(0,55)

solveRect(2,-5)