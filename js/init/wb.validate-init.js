/**
 * Swiper JS Init
 *
 * @author We Both
 * @version 1.0
 * @requires
 *
 */
$(function () {
  'use strict';

    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $(".form-validate").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstName: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        message: "required"
      },
      // Specify validation error messages
      messages: {
        firstName: "Please enter your first name ",
        email: "Please enter a valid email address",
        message: "Please enter your message"
      },
      errorClass: "input--invalid",
      validClass: "input--valid",
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
});
