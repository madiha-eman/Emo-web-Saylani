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

// var friends = ["Asma", "Maryam", "Khizra", "Faiza"]


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


// var oldSt = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// var newSt = ['1', '2', '3', '5', '6', '7', '8'];
// var Fulllist = [];
// if(oldSt.length === newSt.length){
// for(var i=0; i < oldSt.length; i++){
//     Fulllist[i] = oldSt[i] + newSt[i];
// }
//     console.log(Fulllist)
// }


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


// var oldSt = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// var newSt = ['1', '2', '3', '5', '6', '7', '8'];
// var FullList = []
// for(var i=0; i<oldSt.length; i++){
//     for(var j=0; j<newSt.length; j++)
//     FullList.push(oldSt[i] + newSt[j]);
    
// }


/// with for loop and function
// var numbers = [3,4,6];
// var newSt =[];
// function double(num){
// for(var i=0; i<num.length; i++){
//      newSt.push(num[i]*2)
// }

// }
//  double(numbers)
// console.log(newSt)




//// with foreach function
// var numbers = [3,4,6];
// var newSt =[];
// function double2(numbers){
//     numbers.forEach(function(element){
//         newSt.push (element*2)
        
//     })
   
// }
// double2(numbers);
// console.log(newSt);

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

///

// var names = ["asma","fariha", "eman"];
// names = names.toLocaleUpperCase();
// var newNames = [];
// function upper1(names){
//     newNames.push(names);
//     return newNames
    
// }
// upper1(names);
// console.log(newNames)

// var names = "madiha";
// function titlecase(names1){
//     names = names1.toUpperCase();
// }
// titlecase( names)
// console.log(names)

///
// var names = "madiha eman";
// var newNames
// function titlecase(names) {
//     newNames = names[0].toUpperCase() + names.slice(1)
// }
// titlecase(names)
// console.log(newNames)

//
// var names = "madiha eman";
// var newNames
// function titlecase(names) {
//     var names2 =names.split(" ")
//     for(var i=0; i<names2.length; i++){
//         names2[i] = names2[i][0].toUpperCase() + names2[i].slice(1)
//     }
//     names2 = names2.join(" ")
//     console.log(names2)
//     return names2
// }
// var newNames = titlecase(names)
// console.log(newNames)


var name = "madiha"
var vcount = 1;

function vowel1(name1){
    for(i=0; i<name1.length; i++){
        if(vowel1.indexOf(name1[i]) !== -1){
            vcount += 1
        }
    }
    return vcount;
    
}
console.log(vowel1)


function vowel(name)

