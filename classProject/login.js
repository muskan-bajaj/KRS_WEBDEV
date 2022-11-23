function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

var submit = document.getElementById("loginButton");
submit.onclick = function () {
  validateForm();
};

function validateForm() {
  var Form = document.getElementById("myForm");
  var username = Form.username.value;
  var password = Form.password.value;

  var usernameErr = true;
  var passwordErr = true;

  if (username == "") {
    printError("usernameErr", "Enter valid name");
  } else if (username.length < 3) {
    printError("usernameErr", "Enter valid name");
  } else {
    printError("usernameErr", "");
    usernameErr = false;
  }

  if (password == "") {
    printError("passwordErr", "Enter valid password");
  } else if (password.length < 3) {
    printError("passwordErr", "Enter valid password");
  } else {
    printError("passwordErr", "");
    passwordErr = false;
  }

  if ((usernameErr || passwordErr) == true) {
    return false;
  } else {
    var displayData = "Username: " + username + "\n" + "Password: " + password;
    alert(displayData);
  }
}

let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");
fetchRes
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
  });
