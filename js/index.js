// var name = "Madiha"
// var myClass = "4thyear"

// console.log(`my name is ${name} 
// i am student of ${myClass} `)
// var year = prompt("Enter yiur birth year")
// Number = year
// var age = 2020 +year;
// console.log(`my age is ${age}`);
// var name = prompt("Enter your name")
// var age= prompt("Enter your age?")
// if (age > 25){
//     console.log(`${name} Enter in your class room `)
// }
// else if( age <= 25)
// console.log(` ${name} you are not allowed`)

// console.log("Have a nice day!")

// var age = prompt("Enter your age")
// var permit = prompt("Do you have parents permission")
// var NIC = prompt("Do you have NIC")
// if(age > 15 && permit == "yes"){
//  console.log("you are Allowed")
// }
// else if(age > 15 && NIC == "yes" )
// console.log("you are allowed")

// else
// console.log("you are not allowed")

var friends = ["Asma", "Maryam", "Khizra", "Faiza"]


//  console.log(friends[4]);
// console.log(friends[3])
// friends.unshift("rumaisa","eman")
// friends.pop(1)
// friends.push("tania")
// console.log(friends)








// function

// for loop
// for (var i=1; i<=20; i++){
//     console.log(i,'Madiha')
//}


var oldSt = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var newSt = ['1', '2', '3', '5', '6', '7', '8'];
var Fulllist = [];
if(oldSt.length === newSt.length){
for(var i=0; i < oldSt.length; i++){
    Fulllist[i] = oldSt[i] + newSt[i];
}
    console.log(Fulllist)
}


// var input1 = prompt("write your name");
// var oldSt = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// var result = false;
// for(var i=0; i < oldSt.length; i++){
//   if(input1 == oldSt[i]){
//     result = true
//     break;
// }

// }
//  if (result){
//      console.log("name is found")
//  }else{
//      console.log("name is not found")
//  }

//OR

// var input1 = prompt("write your name");
// var oldSt = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// for(var i=0; i<oldSt.length; i++){
//     if(input1 == oldSt[i]){
//         alert("found")
//     }
// } 


var oldSt = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var newSt = ['1', '2', '3', '5', '6', '7', '8'];
var FullList = []
for(var i=0; i<oldSt.length; i++){
    for(var j=0; j<newSt.length; j++)
    FullList.push(oldSt[i] + newSt[j]);
    
}




