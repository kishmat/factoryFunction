var a =1

function foo(){
    a = 2
    // it is not declared in function it is declared
    // previously globaally so value of a changes to 2
}

foo();
console.log(a) //a=2


//but for let and const , it is block wise i.e also for if,for,while actually curly braces


// taking diff of const and let
// const is cannot be changed whatsoever but
let point =50
point = 60

const point = 50
point = 60 // it does;nt work
