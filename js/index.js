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


// with for loop and function
// var numbers = [3,4,6];
// var newSt =[];
// function double(numbers){
// for(var i=0; i<numbers.length; i++){
//      newSt.push(numbers[i]*2)
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
var names = "madiha eman";
var newNames
function titlecase(names) {
    var names2 =names.split(" ")
    for(var i=0; i<names2.length; i++){
        names2[i] = names2[i][0].toUpperCase() + names2[i].slice(1)
    }
    names2 = names2.join(" ")
    console.log(names2)
    return names2
}
// var newNames = titlecase(names)
// console.log(newNames)


// var name = "madiha"
// var vcount = 1;

// function vowel1(name1){
//     for(i=0; i<name1.length; i++){
//         if(vowel1.indexOf(name1[i]) !== -1){
//             vcount += 1
//         }
//     }
//     return vcount;
    
// }
// console.log(vowel1)



// function vowel(name)


//

// var courses = prompt("write a course name")
// var course1 = [];




////for first index number how many alphabets are there
// var str = "the quick brown for jumps over the lazy dog";
// console.log(str.indexOf('quick'))

// // for last index
// var str = "the quick brown quick for jumps over the lazy dog";
// console.log(str.lastIndexOf('quick'))

// //
// var str = "the quick brown for jumps over the lazy dog";
// console.log(str.indexOf('quick'))
// console.log(str.charAt(2));




// ///
// var str = "the quick brown for jumps over the lazy dog";
// console.log(str.indexOf('the quick brown'))
// var index =( 'the white cat' + str.slice(0,15)) ;
// console.log(index)
// var change = ['the white cat'];
// var empty = [];
// var empty = str.splice(0,15) + change;
// console.log(empty)



//or
// var msg = "the quick brown for  jumps over the lazy dog";
// var get = msg.indexOf('  ');
// if(get !== -1){
//     console.log( `you get two space ${get}` )
// }
//  else{
//     console.log('correct')
// }

//or
// var msg = "the quick brown for  jumps over the lazy dog";
// if(msg.indexOf('  ') >= 0){
//     console.log("2 space found")
// }
// else{
//     console.log("not found")
// }

// var msg =  "the quick brown for jumps over the lazy dog";
// var get = msg.lastIndexOf('!');

// if(get !== -1){
//     console.log(` ! found ${get}`);
// }
// else{
//     console.log("not found")
// }

//or
// var msg =  "the quick brown for  jumps over the lazy dog";
// var find = '  ';
// for(let i=0; i<msg.length; i++){
//     if (msg.slice(i, i+2) == "  "){
//         console.log('error! found two space in text')
//         break
//     }
//     else{
//         console.log("no error")
//     }
// }

//
//  var input = prompt("write a number");
//  var input1 = prompt("write a number");
// var get = Number(input).toFixed(input1);
//  console.log(get);

//  var input = prompt("write a number");
//  var input1 = prompt("write a number"); 
//   function financial(input) {
//     return Number(input).toFixed(input1);
//   }
//   console.log(financial(input))


//   var input = prompt("write a number");
//  var input1 = prompt("write a number"); 
//   function get(input,input1) {
//     input = input.toFixed(input1);
//     console.log(get(input,input1))
//   }
 

// function vowel(name)

///
// for(var i=1; i>0; i++){
//     console.log('hello')
// }

// var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// var range = Math.floor((Math.random() * 7));
// console.log("you are slected" + " "+ days[range])


// var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// var match = ["you are slected"]
// for(i=0; i<days.length; i++){
//     for(j=0; j<match.length; j++)
//     console.log(match[j]  + " " + days[i])
// }
// var birth = new Date ('june 23, 1997')
// var now = new Date();
// var days = now.getTime() - birth.getTime();
// days = days/(1000*60*60*24)
// console.log(days)

// var birth = new Date ('june 23, 1997')
// var now = new Date();
// var days = now.getDay() - birth.getDay();
// days = days/(1000*60*60*24)
// console.log(days)


// var now = new Date();
// var tmrrw = new Date('Nov 5, 2020 9:00')
// var remaining = now.getTime() - tmrrw.getTime();
// remaining = remaining/(1000*60*60)
// console.log(remaining)


// var now = new Date();
// var tmrrw = new Date('Nov 5, 2020 9:00')
// var remaining = now.getHours() - tmrrw.getHours();
// remaining = remaining/(1000*60*60*24)
// console.log(remaining)


// function dob(){
//     var now = new Date();
//     var time1 = now.getFullYear();
//     var time2 = now.getMonth();
//     var time3 = now.getDate();
//     console.log(time1 + time2 + time3)

// }
// var now = new Date();
// function dob(now){
    
//     var date = now.getHours() + ":" + (now.getMinutes()+1)+ ":" + now.getSeconds();
//     console.log(date)
// }
// dob(now)

// 1
// var now = new Date();
// console.log(now)



// //
// var myDay = new Date().getDay();
// console.log(myDay)
// var daysArr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
// var day = daysArr[myDay]
// if(day == "fri" || day == "sat" || day == "sun"){
//     console.log("its a weekend")}
//     else{
//         console.log("its working day")
//     }



// var signal = prompt("which light are showing?")
// switch (signal) {
//     case "red":
//         alert("stop")
//         break;
//     case "yellow":
//         alert("ready to go")
//         break;
//     case "green":
//          alert("go ahead")
//         break;
//         default:
//             alert("you entered wrong")

// }



///

// var circleR = prompt("write a number");
// var circleArea = prompt("write another number")

// function calCircumference(circleR) {
//     return 2 * Math.PI * circleR;
//   }
//   function calArea(circleArea){
//       return Math.SQRT2 * circleArea;
//   }
//   console.log(" circle = "+ " "+ calCircumference(circleR), " Area of circle  = "+ " "+ calArea(circleArea));  


//   function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }


// var input1 = prompt("write a number");
// var a = 5;
// if (input1 == a){
//     alert("you have won")


// }  else{
//     alert(prompt("write again")  (input1 == a) )
//     alert("you have won")
// }


// var a = 5;
// while(true){
//     var input1 = prompt("write a number");
//     if(input1 == a){
//         break;
//     }
//    alert("wrong answer")
// }
// alert("you won")

// var a = 5;
// do{
//     input1 = +prompt("enter")
//     if(user == a)
//     alert("you have won")
// }
// while(user !== a){
//     input1 = +prompt("enter")
// }

// function click1() {
//     window.location.href = "http://www.facebook.com";
//   }
//   function click2() {
//     history.back();
//   }
//   function click3() {
//     history.forward();

//   }
//    var windoW = window.open()
//    var txt = '<h1>pop up<h1>'
//    monkeyWindow.document.write(windowContent);
function checkform() {
    var name = document.getElementById("firstName");
    var last = document.getElementById("last");
    var state = document.getElementById("state");
    var radio = document.getElementsByName("gander")
    if(name.value == ''){
      alert('Please enter your first name');
      name.focus();
      
      return false;
    }
    else if(last.value == ''){
        alert('Please enter your last name')
        name.focus();
        return false;
    }
    else if(state.selectedIndex === 0){
        alert('select one')
        name.focus();
        return false;
    }
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
        return true;
        }
    }
        alert("Please check one.");
        name.focus();
        return false;
 
}

var txt = "We are \"Vikings\"";
alert(txt);