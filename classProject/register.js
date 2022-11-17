function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

var submit = document.getElementById("submit");
submit.onclick = function () {
  validateRegister();
};

var reset = document.getElementById("reset");
// reset.onclick = function () {
//   document.getElementById("registration").reset();
// };
reset.onclick = function () {
  clearRegister();
};

function validateRegister() {
  var register = document.getElementById("registration");
  var name = register.name.value;
  var phone = register.phone.value;
  var email = register.email.value;
  var gender = register.gender.value;
  var qualification = register.qualification.value;
  var course = register.course.value;
  var country = register.country.value;
  var tc = register.tc;
  var comment = register.comment.value;

  var nameErr = true;
  var phoneErr = true;
  var emailErr = true;
  var genderErr = true;
  var qualificationErr = true;
  var courseErr = true;
  var countryErr = true;
  var tcErr = true;
  var commentErr = true;

  if (name === "") {
    printError("nameErr", "Please enter your name");
  } else {
    if (name.length < 3) {
      printError("nameErr", "Please enter valid name");
    } else {
      nameErr = false;
      printError("nameErr", "");
    }
  }

  if (phone === "") {
    printError("phoneErr", "Please enter your phone no.");
  } else if (String(phone).length >= 11) {
    printError("phoneErr", "Please enter valid phone no.");
  } else {
    phoneErr = false;
    printError("phoneErr", "");
  }

  if (email === "") {
    printError("emailErr", "Please enter your email");
  } else if (!email.includes("@")) {
    printError("emailErr", "Please enter valid email");
  } else if (!email.includes(".")) {
    printError("emailErr", "Please enter valid email");
  } else {
    emailErr = false;
    printError("emailErr", "");
  }

  if (gender === "") {
    printError("genderErr", "Please select your gender");
  } else {
    genderErr = false;
    printError("genderErr", "");
  }

  if (qualification === "") {
    printError("qualificationErr", "Please select your qualification");
  } else {
    qualificationErr = false;
    printError("qualificationErr", "");
  }

  if (course === "") {
    printError("courseErr", "Please select your course");
  } else {
    courseErr = false;
    printError("courseErr", "");
  }

  if (country === "") {
    printError("countryErr", "Please select your country");
  } else if (country === "Select a country") {
    printError("countryErr", "Please select your country");
  } else {
    countryErr = false;
    printError("countryErr", "");
  }

  if (tc.checked) {
    tcErr = false;
    printError("tcErr", "");
  } else {
    printError("tcErr", "You need to accept the conditions");
  }

  if (comment === "") {
    printError("commentErr", "Please do give some feedback");
  } else {
    commentErr = false;
    printError("commentErr", "");
  }

  if (
    (nameErr ||
      phoneErr ||
      emailErr ||
      genderErr ||
      qualificationErr ||
      courseErr ||
      countryErr ||
      tcErr ||
      commentErr) === true
  ) {
    return false;
  } else {
    var displayData =
      "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Gender: " +
      gender +
      "\n" +
      "Qualification: " +
      qualification +
      "\n" +
      "Course: " +
      course +
      "\n" +
      "Country: " +
      country +
      "\n" +
      "Comments: " +
      comment +
      "\n";

    alert(displayData);
  }
}

function clearRegister() {
  var register = document.getElementById("registration");
  register.name.value = "";
  register.phone.value = "";
  register.email.value = "";
  for (var i = 0; i < register.gender.length; i++) {
    register.gender[i].checked = false;
  }
  for (var i = 0; i < register.qualification.length; i++) {
    register.qualification[i].checked = false;
  }
  for (var i = 0; i < register.course.length; i++) {
    register.course[i].checked = false;
  }
  register.country.value = "Select a country";
  register.tc.checked = false;
  register.comment.value = "";
}
