(function () {
  function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var data = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        document.querySelector(".thankyou_message").style.display = "block";
      } else {
        alert("Form submission failed!");
      }
    };
    xhr.send(data);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var forms = document.querySelectorAll("form");
    forms.forEach(function (form) {
      form.addEventListener("submit", handleFormSubmit);
    });
  });
})();
