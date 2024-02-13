const add=document.querySelector('#btn');
const inputBox=document.querySelector('#input-box');
const listContainer=document.querySelector('#list-container');


function deleteElement(button) {
  var parentDiv = button.parentNode;
  parentDiv.parentNode.removeChild(parentDiv);
}

function edit(element) {
  var newText = prompt('Edit todo item:', element.innerText.trim());
  if (newText !== null && newText !== '') {
      element.innerText = newText;
  }
}

add.addEventListener('click',function(){
    
    if(inputBox.value=== '')
    {
      alert("Please Enter The Text");
    }
    else{
      const li=document.createElement("li");
      li.innerHTML=inputBox.value;
      listContainer.appendChild(li);
      
    
    var button1 = document.createElement('button');
    button1.innerHTML = 'remove';
    button1.id = 'btn1';
    button1.addEventListener('click', function() {
      deleteElement(this);
  });


   

    // Create the second button
    var button2 = document.createElement('button');
    button2.innerHTML = 'edit';
    button2.id = 'btn2';
    button2.addEventListener('click', function() {
      edit(li);
  });
    

    // Append buttons to the div
    

    li.appendChild(button1);
    li.appendChild(button2);
    


      

    }
    inputBox.value="";
})

