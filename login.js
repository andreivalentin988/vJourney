const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHide"),
  pwFields = document.querySelectorAll(".password"),
  singUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link"),
  register = document.querySelector(".registerBt"),
  user = document.querySelector(".userName");

// show/hide password
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

//change from login to register page
singUp.addEventListener("click", () => {
  container.classList.add("active");
});

login.addEventListener("click", () => {
  container.classList.remove("active");
});

//set user caracter limit for registration
register.addEventListener("click", (inputtxt, minlength) => {
  var field = inputtxt.user;
  var mnlen = minlength;
  // var mxlen = maxlength;

  if (field.length > mnlen) {
    alert("Please input the userid with " + mnlen + " characters");
    return false;
  } else {
    login.addEventListener("click", () => {
      container.classList.remove("active");
    });
    return true;
  }
});

//localStorage.setItem
