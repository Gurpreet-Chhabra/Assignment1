var headerTemplate = document.getElementById("header").innerHTML;
console.log(headerTemplate);

var templateFn = _.template(headerTemplate);

console.log(templateFn);
console.log(typeof(templateFn));

var headersDiv = document.getElementById("headers");

var templateHTML = templateFn();
console.log(typeof(templateHTML));
console.log(templateHTML);
//append rather than replace!
 headersDiv.innerHTML += headerTemplate;
