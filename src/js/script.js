$(document).ready(function(){

    $(".footer-down__form").validate({

        errorPlacement: function(error, element) {

            // name attrib of the field
            var n = element.attr("name");

            if (n == "names")
                element.attr("placeholder", "Enter your name");
            else if (n == "textarea")
                element.attr("placeholder", "Enter your message");
            else if (n == "email_address")
                element.attr("placeholder", "Enter your e-mail");

        },
        rules: {
            names: {
                minlength: 2,
                required: true
            },
            textarea: {
                minlength: 2,
                required: true
            },
            email_address: {
                minlength: 6,
                required: true,
                email: true
            }
        },
        highlight: function(element) {

            // add a class "has_error" to the element
            $(element).addClass('footer-form__error');
        },
        unhighlight: function(element) {

            // remove the class "has_error" from the element
            $(element).removeClass('footer-form__error');
        },
        submitHandler: function(form) {

            // submit form now.
        }
    });

    $('.footer-down__reset').on('click', function(){
        $('input, textarea').removeClass('footer-form__error').attr("placeholder", "");
    });

});