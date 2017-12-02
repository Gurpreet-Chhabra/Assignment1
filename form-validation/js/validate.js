$(document).ready(function(){
    $("#formvalidation").validate({
        rules:  {
            firstname: {
                required: true,
                minlength: 6
                },
            lastname: {
                required: true
            },
            email:  {
                required:  true,
                email:  true
            },
            contact: {
                required: true,
                digits: true,
                minlength:  10,
                maxlength:  10
            },
            password:  {
                required: true,
                minlength: 8
            },
            confirm_password:  {
                required: true,
                minlength: 8,
                equalTo: "#password"
            },
            upload: {
                required: true
            }
        },
        messages: {
            firstname:  {
                required: "Please enter the first name",
                minlength:  "Firstname must be atleast 6 characters long."
            },
            lastname:  {
                required: "Please enter the last name",
            },
            email:  {
                required: "Please enter email",
                email:  "Email address is invalid"
            },
            contact:  {
                required: "Please enter your contact no",
                digits:  "Only digits allowed",
                maxlength:  "Contact no must be 10 digits long",
                minlength:  "Contact no must be 10 digits long"
            },
            password: {
                required: "Please enter a password",
                minlength: "Password must be atleast 8 char"
            },
            confirm_password: {
                required: "Please enter a confirm password",
                minlength: "Password must be atleast 8 char",
                equalTo: "Password must be equal to confirm password"
            },
            upload: {
                required: "Please select a file",
            }
        }
    });
        var i = 0;
        $("#creditcard").keyup(function() {
        var value = $("#creditcard").val();
        console.log(value);
        var creditcardRegex = /[0-9 -]+$/;
        var appendvalue;
        if(creditcardRegex.test(value)) {
            if(value.length == 19) {
                $("#creditcard").removeClass("error");
                message = "";
                $("#error_msg").text(message);
            }
            else {
                message = "credit card no must be 16 digits long";
                $("#error_msg").text(message);
                if(value.length % 4 == i ) {
                    console.log(value.length %4);
                    console.log(i);
                    appendvalue = value + "-";
                    $("#creditcard").val(appendvalue);
                    if(i<3) {
                        i++;
                    }
                    else {
                        i=0;
                    }
                }
                $("#creditcard").addClass("error");
            }
        }
        else {
            if(value.length > 0) {
                message = "only digits allowed";
                $("#error_msg").text(message);
                $("#creditcard").addClass("error");
            }
        }
    });
});
