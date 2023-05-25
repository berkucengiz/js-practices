
const input =document.querySelector("#add");
const btn =document.querySelector("#btn");
const list =document.querySelector("#list");


btn.addEventListener("click", btnClick);
list.addEventListener("click", listClick);
input.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
    btnClick();
    }
    });

function btnClick(){
    let txt = input.value;
    if(txt == ""){
        alert("you must write something!")
    }
    else{
        list.classList.remove("d-none")
        li= document.createElement("li");
        li.classList.add("element-group-list-item");
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = "";
       
        
    }
}
function listClick(e){
    if(e.target.classList.contains("element-group-list-item")){
        e.target.classList.toggle("checked");
        }
}

