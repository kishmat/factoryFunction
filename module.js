// const calculator = () => {
//     const add = (a,b) => a+b
//     const sub = (a,b) => a-b
//     const mul = (a,b) => a*b
//     const div = (a,b) => a/b
//     return {
//         add,
//         sub,
//         mul,
//         div
//     } 
// }

// const c1 = calculator() 
// console.log(c1.add(3,4))

//above will run but it is not module

// Module is Immediately Invoked Function Expression (IIFE)

const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();

  calculator.add(4,3)
  calculator.mul(1,2)