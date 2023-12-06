//html onclickli versiyon, ilk öğrendiğimiz
//bu yöntemi kullanmak için html içinde tek tek onclick yazmak gerekiyor.

const resultEl = document.querySelector(".calculator-input");
const numbers = document.querySelector(".row button");

function calculate(num){
    resultEl.value += num
}
 function calculater(){
    resultEl.value = eval(resultEl.value);
 }
function clean(){
    resultEl.value = ""
}


//bahattin hocamın

// const resultEl = document.querySelector(".calculator-input");
// const numbers = document.querySelector(".row button");
// const calculate = document.querySelector("#calculate");
// const clean = document.querySelector("#clean")



// numbers.addEventListener("click", () => {
//      if (button.value !== "="){
//         resultEl.value += button.value;
//      }
//            });
        

// calculate.addEventListener("click", () => {

//     resultEl.value = eval(resultEl.value);
//     });
// clean.addEventListener("click", () => {
//             resultEl.value = "";
//             })








//internetten aldığım



// const numbers = document.querySelector(".row button");
// numberLenght = numbers.length,
// i = 0,
// result = document.querySelector("#result")
// for (i =0; i < numberLenght; i++){
//     numbers.addEventListener("click", (e) => {
//         numbers[i].onclick = calculate

// })
// function calculate(){
//     const valueEl = this.innerHTML
//     if ( valueEl == "="){
//         try {
//             result.innerHTML = eval(result.innerHTML)
//             // result.value = eval(result.value)
//         } catch (e) {
//             result.innerHTML = "0"
//         }
//         return
//     }
//     result.innerHTML += valueEl
// }
// }



