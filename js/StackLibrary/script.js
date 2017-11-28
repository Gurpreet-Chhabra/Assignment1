var stack = new Stack();
window.onload = function () {
document.getElementById("push").onclick = push;
document.getElementById("pop").onclick = pop;
}
function push() {
    var value = document.getElementById("txt1").value;
    if(value != "") {
        var node = document.createElement("p");
        var textnode = document.createTextNode(stack.push(value)[stack.top]);
        node.appendChild(textnode);
        document.getElementById("displaypushstack").appendChild(node);
    }
    else {
        alert("Please provide an input");
    }
}
function pop() {
    var node = document.createElement("p");
    var textnode = document.createTextNode(stack.pop());
    node.appendChild(textnode);
    document.getElementById("displaypopstack").appendChild(node);
}
