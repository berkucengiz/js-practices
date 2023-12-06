
function toplam(){
    const firstNumberEl = document.querySelector("#firstNumber").value;
    const secondNumberEl = document.querySelector("#secondNumber").value;
    let newFirst = Number(firstNumberEl);
    let newSecond = Number(secondNumberEl);
    const sonuc = newFirst + newSecond;
    console.log(sonuc);
    const toplamEl= document.querySelector("#sonuc");

    toplamEl.innerHTML = `Sonuç: ${sonuc}`;
}

