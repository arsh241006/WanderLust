console.log("Validation script loaded");

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  console.log("Forms found:", forms.length);

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        console.log("Form submitted");

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          console.log("Validation failed");
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();
