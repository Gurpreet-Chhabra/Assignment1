function Card(category,text) {
    this.category = category;
    this.text = text;
    var carddiv = document.createElement('div');
    carddiv.innerHTML = "<button id='edit'><i class='fa fa-pencil' aria-hidden='true'></i></button>"+category + "<button id='delete'><i class='fa fa-times' aria-hidden='true'></i></button>" + "<hr>" + text;
    var randomcolor = parseInt(Math.random() * 10);
    carddiv.id = 'displaycategory' + randomcolor;
    carddiv.className = 'col-sm-6 col-md-3 display';
    document.getElementById("card").appendChild(carddiv);
}
Card.prototype.save = function() {
    localStorage.setItem("todos", document.getElementById("card").innerHTML);
};
