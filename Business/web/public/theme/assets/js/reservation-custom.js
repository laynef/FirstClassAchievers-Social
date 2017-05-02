
//form validation
$(function () {
    "use strict";
    $('.datepicker').datepicker({
        startDate: '0',
        autoclose: true
    });
    $('.clockpicker').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        'default': 'now'
    });
});

$.validator.setDefaults({
    submitHandler: function () {
        var form = $("#reservation-form");
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success: function (response) {
                //alert(response);
                $('#reservation-form')[0].reset();
                $("#r_result").html(response);
            }
        });
    }
});
$(function () {
    // validate signup form on keyup and submit
    $("#reservation-form").validate({
        rules: {
            r_date: "required",
            r_name: "required",
            r_email: {
                required: true,
                email: true
            },
            r_time: "required",
            r_guest: "required",
            r_phone_number: "required"
        },
        messages: {
            r_date: "Please Select Date",
            r_name: "Please enter your full name",
            r_email: "Please enter a valid email address",
            r_time: "Please Select time",
            r_guest: "Please enter guest number",
            r_phone_number: "Please enter phone number"
        }
    });
});


