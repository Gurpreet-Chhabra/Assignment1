window.onload = function() {
    document.getElementById("card").innerHTML = localStorage.getItem('todos');
    document.getElementById("btn").onclick = createCard;
};

function createCard() {
    var category = document.getElementById("category").value;
    var text = document.getElementById("txt").value;
    var carddiv = document.createElement('div');
    carddiv.innerHTML = "<i class='fa fa-pencil' id='edit' aria-hidden='true'></i>"+category + "<i class='fa fa-times' id='delete' aria-hidden='true'></i>" + "<hr>" + text;
    var randomcolor = parseInt(Math.random() * 10);
    carddiv.id = 'displaycategory'+randomcolor;
    carddiv.className = 'col-sm-6 col-md-3 display';
    document.getElementById("card").appendChild(carddiv);
    localStorage.setItem("todos", document.getElementById("card").innerHTML);
}
