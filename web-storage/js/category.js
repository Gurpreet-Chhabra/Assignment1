window.onload = function() {
    document.getElementById("card").innerHTML = localStorage.getItem('todos');
    document.getElementById("btn").addEventListener("click", createCard);
    localStorage.removeItem("todos");
};

function createCard() {
    var category = document.getElementById("category").value;
    var text = document.getElementById("txt").value;
    var card = new Card(category,text);
    card.save();
}
