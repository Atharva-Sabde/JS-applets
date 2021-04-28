let addToButton = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');


var task = 1;
addToButton.addEventListener('click', function(){
    if(inputField.value == ""){
        // inputField.style.backgroundColor = rgb(180, 235, 52);
        
        alert("Please add a task first");
    }
    else{
        inputField.style.backgroundColor = "white";
        var paragraph = document.createElement("p");
        paragraph.innerText = inputField.value;
        paragraph.classList.add('paragraph-styling');
        toDoContainer.appendChild(paragraph);

        inputField.value="";

        paragraph.addEventListener('click' , function (){
            paragraph.style.textDecoration = 'line-through';
            paragraph.style.color = "red"
        })
    
        paragraph.addEventListener('dblclick' , function (){
            toDoContainer.removeChild(paragraph);
        })
    }
   
})