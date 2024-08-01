(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.addEventListener("DOMContentLoaded", () => {
  let toggleSwitch = document.getElementById("flexSwitchCheckDefault");
  let toggleLabel = document.querySelector("label[for='flexSwitchCheckDefault']");
  
  if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      toggleSwitch.checked = true;
      toggleLabel.textContent = "Light Mode";
  } else {
      document.body.classList.remove("dark-mode");
      toggleSwitch.checked = false;
      toggleLabel.textContent = "Dark Mode";
  }

  toggleSwitch.addEventListener("change", () => {
      if (toggleSwitch.checked) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("darkMode", "enabled");
          toggleLabel.textContent = "Light Mode";
      } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("darkMode", "disabled");
          toggleLabel.textContent = "Dark Mode";
      }
  });
});
