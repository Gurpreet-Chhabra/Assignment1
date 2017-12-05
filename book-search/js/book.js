$(document).ready(function() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    getBook(id);
    getComments(id);
});

var getBook = function(id) {
    $.ajax({
    	type: "GET",
    	url: "https://jsonplaceholder.typicode.com/posts?id="+id,
        dataType: "JSON",
    	success: function(jsonObj) {
            displayBook(jsonObj);
        }
	});
};

var getComments = function(id) {
    $.ajax({
    	type: "GET",
    	url: "https://jsonplaceholder.typicode.com/posts/"+id+"/comments",
        dataType: "JSON",
    	success: function(comments) {
            displayComments(comments);
            $(".commentbox").css("visibility", "visible");
        }
	});
};

$('#saveComment').click(function() {
        var comment = $("#comment").val();
        var showComment = '<div class="col-md-6 displaycomment"><div class="col-sm-2"><div class="thumbnail"><img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></div></div><div class="showcomment"><div class="col-sm-10"><div class="panel panel-default"><div class="panel-heading"><strong>You</strong> <span class="text-muted">commented</span></div><div class="panel-body">' + comment + '</div></div></div>';
        $(showComment).insertAfter(".commentbox");
        $("#comment").val('');
    });

function displayBook(obj) {
    for(i = 0; i < obj.length; i++) {
        var book = '<div class="col-md-offset-3 col-md-6"><div class="panel panel-default enlarge"><div class="panel-heading len"><h4><a href="book.html?id=' + obj[i].id + '">' + obj[i].title + '</h4></a></div><div class="panel-body title"><p>' + obj[i].body + '</p></div></div></div>';
        $('.book').append(book);
    }
}

function displayComments(obj) {
    for(i = 0; i < obj.length; i++) {
        var showComment = '<div class="col-md-6 displaycomment"><div class="col-sm-2"><div class="thumbnail"><img class="img-responsive user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"></div></div><div class="showcomment"><div class="col-sm-10"><div class="panel panel-default"><div class="panel-heading len"><strong>' + obj[i].email+ '</strong> <span class="text-muted">commented</span></div><div class="panel-body">' + obj[i].body + '</div></div></div>';
        $(".comment").append(showComment);
    }
}
