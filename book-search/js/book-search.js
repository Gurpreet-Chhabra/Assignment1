var books = 1;
$(document).ready(function() {
    getBooks(books);
    $("#previous").attr('disabled', true);
    $( "footer" ).on( "click", "#next" ,function() {
        books++;
        if(books < 10) {
            $("#previous").attr('disabled', false);
        } else {
             $("#next").attr('disabled', true);
         }
          getBooks(books);
    });
    $( "footer" ).on( "click", "#previous" ,function() {
        books--;
        if(books > 1) {
            $("#next").attr('disabled', false);
        }
          else {
              $("#previous").attr('disabled', true);
          }
          getBooks(books);
    });
});

var getBooks = function(books) {
    $.ajax({
    	type: "GET",
    	url: "https://jsonplaceholder.typicode.com/posts?userId=" + books,
        dataType: "JSON",
    	success: function(jsonObj) {
            displayBooks(jsonObj);

        }
	});
};

function displayBooks(obj) {
    $('section').empty(book);
    for(i = 0; i < obj.length; i++) {
        var book = '<div class="col-md-3 col-sm-4"><div class="panel panel-default"><div class="panel-heading len"><h4><a href="book.html?id=' + obj[i].id + '">' + obj[i].title + '</h4></a></div><div class="panel-body title"><p>' + obj[i].body + '</p></div></div></div>';
        $('section').append(book);
        $("footer").css("visibility", "visible");
    }
}
