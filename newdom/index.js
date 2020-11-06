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
// }
function check(){
    var cityName;
    var country1 = document.getElementById("country").value;
    switch (country1){
        case "pakistan":
            cityName = "karachi"
            break;
        case "america":
            cityName = "newyork"
            break;
        }    
         document.getElementById("country").value = cityName.value;

    }
    
