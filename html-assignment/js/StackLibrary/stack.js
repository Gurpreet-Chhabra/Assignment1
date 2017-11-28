function Stack() {
    this.stack = [];
    this.top = -1;
    this.size = 0;
}
Stack.prototype.push = function(a) {
    this.top++;
    this.stack[this.top] = a;
    this.size++;
    return this.stack;
};
Stack.prototype.pop = function() {
    this.stack.splice(this.stack.length-1,1);
    this.top--;
    this.size--;
    return this.stack;
};
