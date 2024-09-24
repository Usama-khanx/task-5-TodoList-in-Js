function addTask(){
    var btn = document.getElementById("add_btn")
    var input = document.getElementById("input");
    var list = document.getElementById("ul_list");
    // create a new elemet li in ul
    var toAddLi  = document.createElement("li");

    // create a remove btn 
    var removebtn = document.createElement('button')
    removebtn.textContent = 'Remove'
    removebtn.className = 'removeBtn';
    toAddLi.textContent = input.value;

    removebtn.onclick = function(){
        list.removeChild(toAddLi)
        list.removeChild(removebtn)
    }
    
    
    if (toAddLi.textContent.trim() === ''){
        alert("Empty list not allowed")
        list.removeChild(removebtn)

    }

    toAddLi.onclick = function(){
        toAddLi.classList.toggle('liClicked')
    }
   

    
    
    list.appendChild(toAddLi)
    list.appendChild(removebtn);
    

    input.value = '';
}
