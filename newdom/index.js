// var count = 0;
// var name = "madiha"
// function display(count,name){
//    name++;
//    count++;
//    console.log(`you clicked ${name} ${count} time`)

// }


// function num(){
//     var name = "madiha"
// console.log(name)
// }




// function doo(){
// var x = document.getElementById("para");
// var text = x.innerHTML
// x.innerHTML='My new text'
// x.className='new';

// console.log(x.tagName)
// // }

// function check(){
//     var cityName;
//     var country1 = document.getElementById("country").value;
//     switch (country1){
//         case "pakistan":
//             cityName = "karachi"
//             break;
//         case "america":
//             cityName = "newyork"
//             break;
//         }    
//          document.getElementById("country").value = cityName.value;

//     }
    

//make invisible
// function para1(){
//  var x = document.getElementsByClassName('blue')
//  console.log(x.className)
//  x.className += 'paraInvisible'
// }

//  function invisible(){
//     var x = document.getElementById('para')
//   console.log(x[0].className = 'paraInvisible')
//  }


//  function alter(){
//      var x = document.getElementsByTagName('p');
//      var tochange = 'kuwait'
//      x[i].innerHTML = 'sydney'
//      console.log(x)
//      for(let i = 0; i<x.length; i++){
//          if(tochange[i].innerHTML == 'kuwait'){
//              x[i].innerHTML = 'sydney'
//          }
//      }
//     }


//  function alter(){
//      var div = document.getElementById('city')
//      var x = div.getElementsByTagName('p')

//     var x = document.getElementsByTagName('p');
//     var tochange = 'kuwait'
//     console.log(x)
//     for(let i = 0; i<x.length; i++){
//         if(x[i].innerHTML == 'kuwait'){
//             x[i].innerHTML = 'sydney'
//         }
//     }
// }
// function humpty()

// var d = document.getElementById("humpty");
// var pCounter = 0;
//  for (var i = 0; i < d.childNodes.length; i++) {
//  if (d.childNodes[i].nodeType === 1 ) {
//  pCounter++;
//  if (pCounter === 3) {
//  d.childNodes[i].innerHTML = "3";
//  break;
//  }
//  } 
//  }

//  function humpty(){
//      var x = document.getElementById('humpty')
//      x.childNodes[1].innerHTML= 'madiha'
//  }


function addItem(){
    var li = document.createElement('li')
    var inputValue = document.getElementById('myInput');
    var t =document.createTextNode(inputValue.value);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);}
    // if(inputValue === " "){
    //     alert("write something");
    // }
    // else{
    //     document.getElementById("myUL").appendChild(li);
    // }
    // document.getElementById('myInput').value  = "";
    // var span = document.createElement("li");
    // var txt = docment.createTextNode("myInput");
    // span.appendChild(txt);
    // li.appendChild(span);

    // }


 


















// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//     alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//           var div = this.parentElement;
//           div.style.display = "none";
//       }
//     }
//   }

// function big(){
//     var a = document.getElementById("para");
//    a.className += ' hidden1' 
// }


// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12,  

   
    
// }

// for(var i in student)
//  console.log(student[i])



//  var num1 = {
//     title: 'Bill Gates',
//     author: 'The Road Ahead',
//     readingStatus: true
// }

//  var num2 = {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     readingStatus: true
// }
//  var num3 = {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     readingStatus: false
// }

// for (var i in num1)
// console.log(num3[i])



// var num1 =[ {
//     title: 'Bill Gates',
//     author: 'The Road Ahead',
//     readingStatus: true
// },

// {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     readingStatus: true
// },
// {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     readingStatus: false
// }];
// for (let i =0; i<num1; i++)
//  var 




//  var emplyee = {
//     name : "David Rayy",
//     age : "30",
//     absent : 2,
//     salary: 30000,
      
    
    
// }
function Emplyee(name,salary,absent){
  this.name = name;
  this.salary = salary;
  this.absent = absent;
  Emplyee.prototype.bonus = 1/////000;
  this.salaryCalc = function(){
    if(this.absent > 2){
        this.salary = this.salary * .2 + Emplyee.prototype.bonus ;
    }
  }
}

var emplyee1 = new Emplyee('madiha', 5000,3);
var emplyee2 = new Emplyee('asma', 4000,6);
var emplyee3 = new Emplyee('umii', 3000,0);
emplyee1.salaryCalc()
emplyee2.salaryCalc()
emplyee3.salaryCalc()
emplyee3.bonus = 0;
console.log(emplyee1)
console.log(emplyee2)
console.log(emplyee3)
