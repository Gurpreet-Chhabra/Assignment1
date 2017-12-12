$(document).ready(function() {
    if(localStorage.getItem('info') != null) {
        setlocalStorage();
    }
});
$(".dropdown-menu").click(function() {
    $(".dropdown-list").toggle(200);
});

$("#personal").click(function() {
    $(".timeline-content,.slide").removeClass("active");
    $("#personal-content,#personal-slide").addClass("active");
});

$("#project").click(function() {
    $(".timeline-content,.slide").removeClass("active");
    $("#project-content,#project-slide").addClass("active");

});

$("#general").click(function() {
    $(".timeline-content,.slide").removeClass("active");
    $("#general-content,#general-slide").addClass("active");
});

$("#membership").click(function() {
    $(".timeline-content,.slide").removeClass("active");
    $("#membership-content,#membership-slide").addClass("active");

});

$(".accordion").click(function() {
    $(".accordion").children().removeClass("active");
    var nextEle = $(this).next();
    if(nextEle.css('display') == "block" ) {
        nextEle.css("display", "none");
        nextEle.removeClass("active");
        return;
    }
    $(".accordion-content").css("display", "none");
    nextEle.slideToggle( "slow", function() {
    });
    $(this).children().addClass("active");
});

$("#edit").click(function() {
    $(this).parent().parent().css("display","none");
    $(".edit-info").css("display","block");
});
$("#close").click(function() {
    $("#edit").parent().parent().css("display","block");
    $(".edit-info").css("display","none");
});

$("#save").click(function() {
    info = {name:$("#name").val(),email:$("#email").val(),mobile:$("#mobile").val(),address:$("#address").val()}
    localStorage.setItem("info", JSON.stringify(info));
    setlocalStorage();
});
function setlocalStorage() {
    var information = JSON.parse(localStorage.getItem('info'));
    $("#edit-name").text(information.name);
    $("#edit-email").text(information.email);
    $("#edit-mobile").text(information.mobile);
    $("#edit-address").text(information.address);
    $("#edit").parent().parent().css("display","block");
    $(".edit-info").css("display","none");
}
$("#cancel").click(function() {
    $("#edit").parent().parent().css("display","block");
    $(".edit-info").css("display","none");
});

//each() specifies a function to run for each matched element
//The find() method returns descendant elements of the selected element.
//duration specified timing.
//transform css property to make rotation

$(".progress").each(function() {
  var val = $(this).find("span");
  var perc = parseInt( val.text());
  var status = $(this).next();
  $(status).animate({perc}, {
    duration: 3000,
    easing: "swing",
    step: function(now) {
      status.text(now|0 + '%');
    }
  });
});

var twentyFive = document.getElementById("bar-25");
var fivety = document.getElementById("bar-50");
var  seventyfive= document.getElementById("bar-75");
var hundred = document.getElementById("bar-100");

var ctx = twentyFive.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 1.5 * Math.PI,0 * Math.PI, false);
ctx.strokeStyle = "#f57c00";
ctx.lineWidth = 4;
ctx.stroke();

ctx = fivety.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 1.5 * Math.PI,0.5 *Math.PI, false);
ctx.strokeStyle = "#2196F3";
ctx.lineWidth = 4;
ctx.stroke();

ctx = seventyfive.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 1.5*Math.PI,1 *Math.PI, false);
ctx.strokeStyle = "#ff5252";
ctx.lineWidth = 4;
ctx.stroke();

ctx = hundred.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0 * Math.PI,2 * Math.PI, true);
ctx.strokeStyle = "#4CAF50";
ctx.lineWidth = 4;
ctx.stroke();
