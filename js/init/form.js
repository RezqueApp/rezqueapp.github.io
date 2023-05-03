var form = document.getElementsByClassName('subscribe-form')[0];
var success = document.getElementById('subscribe-success-notification');
var error = document.getElementById('subscribe-error-notification');
var spinner = document.getElementById('spinner-holder');
var button = document.getElementById('subscribe-form-submit');

form.addEventListener('submit', processForm);

function processForm(e) {
  e.preventDefault();

  spinner.classList.add('spinner-grow');
  spinner.classList.add('spinner-grow-sm');
  button.setAttribute('disabled', 'disabled');

  var formData = $('.subscribe-form').serializeArray(); 

  if (typeof google_tag_manager !== "undefined") {
  	var cid = google_tag_manager['GTM-WXTT56T'].dataLayer.get('clientId');
    formData.push({name: 'GACLIENTID', value: cid});
  }

  var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  formData.push({name: 'TIMEZONE', value: tz});

  $.ajax({
    // appended '-json' to url and '&c=?' to work with jsonp
    // url: 'https://rezque.us4.list-manage.com/subscribe/post-json?u=1e42f067fe11d0ec4d49fc6ad&amp;id=f4ce6eb9d7&c=?',
    url: 'https://rezque.us21.list-manage.com/subscribe/post-json?u=7859439a72e3df86bb2fe9cae&id=111549df23&c=?',
    type: 'GET',
    data: $.param(formData),
    dataType: 'jsonp',
    success: function (data) {
      console.log(data);
      if (data['result'] == 'success') {
        $('#subscribe-success-notification').append(data['msg']);
        success.classList.add('show');
        spinner.classList.remove('spinner-grow');
        spinner.classList.remove('spinner-grow-sm');
        form.querySelector('input[name="EMAIL"]').value = "";
      } else {
        $('#subscribe-error-notification').append(data['msg']);
        error.classList.add('show');
      }
    }
  });

  return false;
}

// var signups = document.getElementsByClassName('signup');

// for (i = 0; i < signups.length; i++) {
//   signups[i].addEventListener('click', redirectToForm);
// }

// function redirectToForm(e) {
//   e.preventDefault();	
// 	var elmnt = document.getElementsByClassName('section-subscribe')[0];
// 	elmnt.scrollIntoView();
// }