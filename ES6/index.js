//todays topis
//arrow function  //fiilter method // map method
// tamplate litteral.... is  back tick   ` `
//now we have to use const instead var AND let in loop instead var loop

// if(true){
//     let x=1;
// }
// console.log(x)  //ref error

// function test(){
//     var foo = 33;
//     if(foo){
//         let foo = (2+55);
//    }
//    return foo
// }
// var foo = test();
// console.log(foo);

//Arrow function  () =>{}
// const multi = (a=0, b=0) => {
//     var c = a*b
//     return c
// }
// console.log(multi(3,3))


// const multi = () => {
//     var age = prompt('enter your age')
//     var indays = age * 365;
//     return indays
// }
// console.log(multi());

// const add = () => {
//     var a = prompt('enter a number')
//     var a = ++a;
//     return a
// }
// console.log(add())

// const sub = () => {
//     var a = prompt('enter a number')
//     var a = --a;
//     return a
// }
// console.log(sub());

// const multi = () => {
//     var sqr = prompt('enter your age')
//     var square = sqr * sqr 
//     return sqr
// }
// console.log(multi());

//.map instead for loop
// var arr = [2,3,4]
// const newArr = arr.map(
//     (item) => {
//         return item + 5
//     }
// )
// console.log(newArr)


// var arr = [2,3,4]
// const newArr = arr.map(
//     (item) => {
//         return Math.sqrt(item)
//     }
// )
// console.log(newArr)

// var c = ['asma', 'madiha']
// const greet = c.map(
//     (item) => {
//         let greeting = `hello ${item}`
//         return greeting
//     }
// )
// console.log(greet)


var c = ['asma', 'madiha']
const ind = c.map(
    (item,index) => {
        let ind = `${index}  ${item}`  
        return ind 
    }
)
console.log(ind)
