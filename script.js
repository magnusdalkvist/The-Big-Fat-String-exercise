let input;
let output;
let dropdown;

document.querySelector("button").addEventListener("click", generate);

function generate() {
  input = document.querySelector("#input").value;
  dropdown = document.querySelector("#dropdown").value;
  if (dropdown == 1) {
    output = input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
  } else if (dropdown == 2) {
    output = input.substring(0, input.indexOf(" ")).trim();
  } else if (dropdown == 3) {
    output = `The length of the first name is ${input.split(" ")[0].length}`;
  } else if (dropdown == 4) {
    output = `Start: ${input.indexOf(" ") + 2} End: ${input.lastIndexOf(" ")}. Middlename: ${input.substring(input.indexOf(" "), input.lastIndexOf(" ")).trim()}`;
  } else if (dropdown == 5) {
    if (input.endsWith(".jpg") == true) {
      output = "Filename is .jpg";
    } else if (input.endsWith(".png") == true) {
      output = "Filename is .png";
    } else {
      output = "Filename is not .png or .jpg";
    }
  } else if (dropdown == 6) {
    output = "*".repeat(input.length);
  } else if (dropdown == 7) {
    output = input.substring(0, 2).toLowerCase() + input.substring(2, 3).toUpperCase() + input.substring(3).toLowerCase();
  } else if (dropdown == 8) {
    let upperCase = false;
    let result = "";
    for (i = 0; i < input.length; i++) {
      let letter = input[i];
      if (upperCase) {
        letter = letter.toUpperCase();
      }
      upperCase = letter === " " || letter === "-";
      result += letter;
    }
    output = result;
  }
  document.querySelector("#output").value = output;
}
