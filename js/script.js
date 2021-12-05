// JavaScript Document
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

grecaptcha.ready(function () {
  grecaptcha
    .execute("6LesgCUcAAAAABUqfIjaKhD8AJy2u0OsSgxXuBd3", { action: "homepage" })
    .then(function (token) {
      document.getElementById("captchaResponse").value = token;
    });
});
