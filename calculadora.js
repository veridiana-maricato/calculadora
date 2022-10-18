function insert(num){
    var number = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = number + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calculate(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }

    else{
        document.getElementById('resultado').innerHTML = "ERROR"
    }
}



// var num1 = 1
// var num2 = 2
// var num3 = 3
// var num4 = 4
// var num5 = 5
// var num6 = 6
// var num7 = 7
// var num8 = 8
// var num9 = 9
// var num0 = 0
// var clickedNumber

// num1 = document.getElementById("1")
// num2 = document.getElementById("2")
// num3 = document.getElementById("3")
// num4 = document.getElementById("4")
// num5 = document.getElementById("5")
// num6 = document.getElementById("6")
// num7 = document.getElementById("7")
// num8 = document.getElementById("8")
// num9 = document.getElementById("9")
// num0 = document.getElementById("0")


// function clickNumber(){
//     clickedNumber = document.querySelectorAll("#numberSelected")
//     return clickedNumber
//     showResult()
// }
// function showResult(){
//     var result = document.querySelector("result")
//     result.innerHTML = clickedNumber
// }

// console.log("oie")
// console.log(clickedNumber)