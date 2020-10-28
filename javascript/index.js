//Q 1:  Write a program to display alert with your name and class on next line.(use line break)
// ANS
//alert("Madiha \n 4th Year")

//OR 
//alert(`Madiha
//4th year`) 

//Q 2: Declare a variable birthYear and assign your birthyear in this variable and alert the type of the variable like this 'type of birth year is number'
//ANS
// var birthYear = 1997;
// alert('This birthYear is type of = ' + typeof birthYear)

//Q 3: answer is in html file we can also display it in browser through js keyword document.write...

//Q 4: Write a program that returns your age in days. (take age as an input)
//ANS
// var age = prompt("Enter your age")
// var inDays = age * 365;
// alert('your age in days = ' + inDays)

//Q 5: Create a function that takes a number as an argument, increments the number by +1 and returns the result. (take number as an input)
//ANS
//with funtion
// var addNum =  prompt("Enter a number");
// function inc(addNum){
//    var addNum = ++addNum;
//     return addNum

// }
// var newAdd = inc(addNum)
// alert(newAdd)

//OR 
//Without function
// var addNum = prompt("Enter a number")
// var newAdd = ++addNum;
// alert(newAdd)

//Q 6:  Create a function that takes a number as an argument, decrements the number by -1 and returns the result.
//ANS
//With functiom
// var subNum =  prompt("Enter a number");
// function inc(subNum){
//    var subNum = --subNum;
//     return subNum

// }
// var newSub = inc(subNum)
// alert(newSub)

//OR
//Without function
// var subNum = prompt("Enter a number")
// var newSub = --subNum;
// alert(newSub)

//Q 7: Create a function that takes a number and return square of a number
//ANS
//With function
// var num3 = prompt("enter a number");
// function square(num3) {
//     num3 = num3 * num3;
//     return num3
    
// }
// var num4 = square(num3);
// alert(num4);

//OR 
//Without function
// var sqr = prompt("a number")
// var newsqr = sqr * sqr;
// alert(newsqr)

//Q 8:  check if the entered number is a positive or a negative integer
//ANS
// var num2 = prompt("Enter a number")
// if (num2 > 0){
//     alert(num2 +" "+ 'is positive integer')
// }

// else if (num2 < 0) {
//     alert(num2 + " " + 'is negaive integer')
// }

// else if (num2 == 0) {
//     alert(num2 + " " + 'This value is zero')
// }

//Q 9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 163 Pakistani Rupee and 1 Saudi Riyal = 43 Pakistani Rupee)
//ANS
// var US = prompt("Enter US currency")
// var S_D = prompt("Enter s.d currency")
// var totalCurrency = US * 163 + S_D * 43;
// alert(totalCurrency)



//Q 10:  What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
//ANS
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// alert(result) //3

// var a = 2;
// var a =  --a;
// alert(a) //1

// var a = 2;
// var b = 1;
// var result2 = --a - --b;
// alert(result2) //1

// var a = 2;
// var b = 1;
// var result3 = --a - --b + ++b; 
// alert(result3) // 2

// var a = 2;
// var b = 1;
// var result4 = --a - --b + ++b + b--;
// alert(result4) //3


//Q 11: Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights” if enter lahore, display "welcome to historical city" if Quetta display message "welcome to cold city"
//ANS
// var cityName = prompt("Enter your city name")
// if (cityName == "karachi"){
//     alert("Welcome to city of lights")
// }
// else if(cityName == "lahore"){
//     alert("welcome to historical city")
// }
// else if (cityName == "quetta"){
//     alert("welcome to cold city")
// }


//Q 12:  Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
//ANS
// var add = +prompt("Enter first value")
// var op = prompt("Enter operator like... +, -, *, /, %" )
// var sec = +prompt("Enter sec value")

// if (op === "+" ){
//     alert(add + sec)
// }
// else if (op === "-" ){
//     alert(add - sec)
// }
// else if (op === "*" ){
//     alert(add * sec)
// }
// else if (op === "/" ){
//     alert(add / sec)
// }
// else if (op === "%" ){
//     alert(add / sec * 100 + "%")
// }
