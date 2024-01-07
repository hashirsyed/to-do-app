const inputField = document.querySelector("#input");
const btn = document.querySelector("#btn");
const form = document.querySelector('form');
const ul = document.querySelector("ul");

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(!inputField.value){
        return false;
    }
   
    const div = document.createElement("div");
    div.classList.add("container");

    const li = document.createElement("li");
    li.innerHTML = inputField.value;

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    checkBox.classList.add("check");

    div.append(checkBox)
    div.append(li)
    ul.append(div);
    
    inputField.value = "";
    checkBox.addEventListener("click",function(){
        setTimeout(() => {
            li.style.display = "none";
        div.style.display = "none";
        }, 300)
    })
})
