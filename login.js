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
register.addEventListener("click", (e) => {
  var field = e.target;
  console.log(field);
  var mnlen = e.target;
  console.log(user.value.length);

  if (user.value.length < 6) {
    alert("Please input the userid with " + "6" + " characters");
    return false;
  } else {
    login.addEventListener("click", () => {
      container.classList.remove("active");
    });
    return true;
  }
});

//localStorage.setItem
