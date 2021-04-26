// create a "delect" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "delect";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    todoInput.value = "";
}

// Click on delect button to remove the current list item
var delect = document.getElementsByClassName("delect");
var i;
for (i = 0; i < delect.length; i++) {
    delect[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}    

// Add a "checked" symbol when clicking on a list item //
var list = document.querySelector('ul');
list.addEventListener('click' , function(ev) {
    if (ev.target.tagName === 'LI') 
{
    ev.target.classList.toggle('checked');
   }
}, false);

// create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
      span.className = "delect";
      span.appendChild(txt);
      li.appendChild(span);

      for (i =0; i < delect.length; i++) {
          delect[i].onclick = function()
{ 
      var div =this.parentElement;
      div.style.display = "none";              
      }
    }  
}


