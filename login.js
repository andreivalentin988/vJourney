const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHide"),
  pwFields = document.querySelectorAll(".password"),
  singUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link"),
  register = document.querySelector(".registerBt"),
  userName = document.querySelector(".userName"),
  pass = document.querySelector(".password");

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

//set  character limit for registration
register.addEventListener("click", (e) => {
  let field = e.target;
  console.log(field);
  let mnlen = e.target;

  // let passLength = pass.value.length;
  if (userName.value.length < 6) {
    alert("Username should be at least 6 characters");
    return false;
  }
  // if (pass.value.length < 6) {
  //   alert("Password should be at least 6 characters");
  // }
  if (true) {
    let userData = [
      { Username: document.getElementById("user").value },
      { Email: document.getElementById("email").value },
      { Password: document.getElementById("password").value },
      { Date: document.getElementById("Age").value },
    ];
    localStorage.setItem("users", JSON.stringify(userData));
    register.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }
});
// let name, email, password, date;
// name = document.getElementById("user").value;
// email = document.getElementById("email").value;
// password = document.getElementById("password").value;
// date = document.getElementById("Age").value;
// localStorage.setItem("name", JSON.stringify(name));
// localStorage.setItem("email", JSON.stringify(email));
// localStorage.setItem("password", JSON.stringify(password));
// localStorage.setItem("date", JSON.stringify(date));

//   return true;
// }
// if (pass == "" || passLength > 5) {
//   register.addEventListener("click", () => {
//     container.classList.remove("active");
//   });
// } else {
//   alert("Password must be at least 6 characters long");
// }

// var users = JSON.parse(localStorage.getItem("Users")) || [];
// var userData = [
//   { Username: document.getElementsById("user").value },
//   { Email: document.getElementById("email ").value },
//   { Password: document.getElementById("password").value },
//   { Address: document.getElementById("password").value },
//   { Phone: document.getElementById("Age").value },
// ];

// users.push(userData);
// localStorage.setItem("Users", JSON.stringify(users));

// if (true) {
//   const store = {
//     user: "",
//     password: "",
//     email: "",
//     age: "",
//   };
