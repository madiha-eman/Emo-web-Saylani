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


// var c = ['asma', 'madiha']
// const ind = c.map(
//     (item,index) => {
//         let ind = `${index}  ${item}`  
//         return ind 
//     }
// )
// console.log(ind)

           ///developer.mozilla.org
/// include, find, filter, reduce
///find.....undefine
///include....false or true
///filter.....we make condition 
///reduce.....we can make array value add and subtract and anything ...in way left to right 


// var teachers = ['faiza', 'inzimam', 'mughal']
// var students = ['kulsoom', 'maryam', 'tooba', 'komal']
// var toFind = prompt('Enter your name')
// var a = teachers.find(
//     (item,index) =>{
//         return item == toFind
//     }
// )
    
// console.log(a)


// var teachers = ['faiza', 'inzimam', 'mughal']
// var students = ['kulsoom', 'maryam', 'tooba', 'komal']
// var ages = [19,21,18,19]
// var toFind = prompt('Enter your name')
// var a = teachers.includes(toFind)
    
// console.log(a)

//         if(a == true){
//             let d =students.map((item,index) =>{
//                 return {name:item, age:ages[index]}
//             })
// console.log(d)
//         }

        ////destructing

// [a,b,c] = [1,2,3]
// console.log(a)        


         ///ternary js...condition ? expriftrue : exprifFalse
 
// var salary = prompt('Enter your salary')
// var bonus = (salary >= 5000) ? 1000: 500    
// console.log(bonus)  

// let age = prompt('Enter your age');
// var allowed = (age > 18) ? 'yes'
//               :(age == 18) ? 'lemme think'
//               :(age < 18) ? 'not allowed'
//               :'invalid'
// console.log(allowed)  

let days = prompt('Enter your present day');

var allowed = (days > 23) ? 'you are not eligible for exam'
              :(days == 23) ? 'you can get your admit card after 10 dec'
              :(days < 23) ? ''
              :'invalid'
console.log(allowed)  
        
         