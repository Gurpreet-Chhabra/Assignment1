initializeCard();
renderTodos();

document.getElementById("btn").addEventListener("click", createCard);

function initializeCard() {
    if(localStorage.getItem('todos') != null) {
        return;
    }
    localStorage.setItem("todos", JSON.stringify([]));
}

function renderTodos() {
    var displaycard = "";
    var randomcolor = 0;
    var todos = JSON.parse(localStorage.getItem('todos'));
    if(todos.length == 0) {
        return;
    }
    for(var i in todos) {
        randomcolor = parseInt(Math.random() * 10);
        displaycard += "<div class='col-sm-6 col-md-3 display" + randomcolor + "' id='displaycategory" + i + "'><button id='edit"+ i + "' class='edit' onclick='editCard(this.id," + i + ")'><i class='fa fa-pencil' aria-hidden='true'></i></button>"+ todos[i].category + "<button id='delete"+ i + "'class='delete' onclick='deletecard(this.id," + i + ")'><i class='fa fa-times' aria-hidden='true'></i></button>" + "<hr>" + todos[i].todo +"</div>";
    }
    document.getElementById("card").innerHTML = displaycard;
}

function createCard() {
    var category = document.getElementById("category").value;
    var todo = document.getElementById("txt").value;
    var card = new Card(category, todo);
    card.save();
    addCard(category,todo);
    document.getElementById("txt").value = '';

}
function addCard(category,todo) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    randomcolor = parseInt(Math.random() * 10);
    var carddiv = document.createElement('div');
    carddiv.innerHTML = "<button class='edit' id='edit" + (todos.length-1) + "' onclick='editCard(this.id," + (todos.length-1) + ")'><i class='fa fa-pencil' aria-hidden='true'></i></button>"+ category + "<button class='delete' id='delete" + (todos.length-1) + "' onclick='deletecard(this.id," + (todos.length-1) + ")'><i class='fa fa-times' aria-hidden='true'></i></button>" + "<hr>" + todo;
    var randomcolor = parseInt(Math.random() * 10);
    carddiv.id = 'displaycategory' + (todos.length-1);
    carddiv.className = 'col-sm-6 col-md-3 display'+randomcolor;
    document.getElementById("card").appendChild(carddiv);
}
function editCard(id,index) {

    var todos = JSON.parse(localStorage.getItem('todos'));
    document.getElementById("editcategory").value = (todos[index].category);
    document.getElementById("edittxt").value = (todos[index].todo) ;
    var modal = document.getElementById("edit");
    var btn = document.getElementsByClassName("close")[1];
    var save = document.getElementById("save");
    modal.style.display = "block";
    btn.onclick = function() {
       modal.style.display = "none";
   }
   save.onclick = function() {
       var editcategory = document.getElementById("editcategory").value;
       var edittodo = document.getElementById("edittxt").value;
       todos[index] = {category:editcategory,todo:edittodo};
       localStorage.setItem("todos", JSON.stringify(todos));
       modal.style.display = "none";
       location.reload();
   }
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
}
function deletecard(id,index) {

     var todos = JSON.parse(localStorage.getItem('todos'));
     var modal = document.getElementById("confirm");
     var del = document.getElementById("delete");
     var btn = document.getElementsByClassName("close")[0];
     var no = document.getElementById("no");
     var yes = document.getElementById("yes");
     var confirmdelete = document.getElementById(id).parentNode.id;
    modal.style.display = "block";
     btn.onclick = function() {
        modal.style.display = "none";
    }
    no.onclick = function() {
       modal.style.display = "none";
   }
   yes.onclick = function() {
       console.log(index);
       alert(todos.length);
       todos.splice(index,1);
       localStorage.setItem("todos", JSON.stringify(todos));
       document.getElementById(confirmdelete).remove();
       modal.style.display = "none";
       location.reload();
  }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
