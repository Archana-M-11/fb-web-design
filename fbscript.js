$(document).ready(function(){
    $("#signupform").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4
            },
            sname: {
                required: true,
                minlength: 4
            },
            // Add other validation rules for other fields as needed
            email:{
                required:true,
                email:true
            },
            pass:{
                minlength:4
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"enter first name",
                minlength:"enter min leght words"
            }
        }
    });
});
