function Card(category, todo) {
    this.category = category;
    this.todo = todo;
    this.card = JSON.parse(localStorage.getItem('todos'));
}
Card.prototype.save = function() {
    var cardObj = {category: this.category, todo: this.todo};
    this.card.push(cardObj);
    localStorage.setItem("todos", JSON.stringify(this.card));
};
