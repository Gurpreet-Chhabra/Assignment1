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
});
