const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");



const checkUserInput = () => {
  const inputNum = userInput.value;
  const regex_nan = /[a-zA-Z*&!#%]+/;
  const regex_pattern1 = /j/;
  if (inputNum === "") {
    alert("Please provide a phone number");
    result.textContent = "test";
    console.log(inputNum);
    return;
  }
  else if (regex_nan.test(inputNum)) {
    result.textContent = `Invalid US number: ${inputNum}`;
    console.log(inputNum);
    return;
  }
  else if (isValidPhoneNumber(inputNum))
  {
    result.textContent = `Valid US number: ${inputNum}`;
    console.log(inputNum);
    console.log("Correct num");
    return;
  }
  else {
    result.textContent = `Invalid US number: ${inputNum}`;
    console.log("Incorrect number");
  }
}

const clearOutput = () => {
  result.textContent = "";
  userInput.value = "";
}

checkBtn.addEventListener("click", checkUserInput);

clearBtn.addEventListener("click", clearOutput);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

function isValidPhoneNumber(number) {
  const regex = /^1? ?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  return regex.test(number);
}


