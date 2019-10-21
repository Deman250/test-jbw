'use strict';

let counter = 1;
let userData = [];
let userDataJson;

$(document).ready(function() {
  $('#closeBlock').click(function() {
    $('.header-content').fadeOut();
    $('.header').fadeOut();
  });

  $('#increment').click(function() {
    counter++;
    $('#number').text(counter);
    $('#sum').text('$' + counter * 10.99);
  });

  $('#decrement').click(function() {
    counter--;
    if ($('#number').text() <= 0) {
      counter = 0;
      $('#sum').text('$' + counter * 10.99);
    }

    $('#number').text(counter);
    $('#sum').text('$' + counter * 10.99);
  });

  $('#popUpForm').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 10,
        number: true,
      },
    },
  });

  $('#popUp').dialog({
    autoOpen: false,
    modal: true,
    draggable: false,
    resizable: false,
    show: {
      effect: 'fade',
      duration: 400,
    },
    hide: {
      effect: 'fade',
      duration: 400,
    },
    open: function() {
      $('.ui-widget-overlay').click(function() {
        $('#popUp').dialog('close');
      });
    },
    buttons: [
      {
        text: 'Continue',
        type: 'submit',
        click: function() {
          if ($('#popUpForm').valid()) {
            userData = {
              name: $('#userName').val(),
              mail: $('#userEmail').val(),
              phone: $('#userPhone').val(),
            };
            userDataJson = JSON.stringify(userData);
            // console.log(userDataJson);
            // console.log($('#userPhone').val().slice(2));
            $(this).dialog('close');
            $('#modal').dialog('open');
          }
        },
      },
    ],
  });

  $('#modal').dialog({
    autoOpen: false,
    modal: true,
    draggable: false,
    resizable: false,
    show: {
      effect: 'fade',
      duration: 400,
    },
    hide: {
      effect: 'fade',
      duration: 400,
    },
    width: 400,
    open: function() {
      $('.ui-widget-overlay').click(function() {
        $('#modal').dialog('close');
      });
    },
  });

  $('#country').change(function() {
    if ($('#userPhone').val().length > 2) {
      $('#userPhone').val($('#country').val() + $('#userPhone').val().slice(2));
    } else {
      $('#userPhone').val($('#country').val() + $('#userPhone').val());
    }
  });

  // $('#country').ddslick();

  $('#popUpBtn').click(function() {
    $('#popUp').dialog('open');
  });

  $('#closePopUp').click(function() {
    $('#popUp').dialog('close');
  });

  $('#closeModal').click(function() {
    $('#modal').dialog('close');
  });

  $('#modalBtn').click(function() {
    $('#modal').dialog('close');
  });

  $('#userName').keyup(function() {
    this.value = this.value.replace(/[^а-яё|\W]/i, '');
  });
});
