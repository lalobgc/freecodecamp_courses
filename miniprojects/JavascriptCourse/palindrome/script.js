const checkButton = document.getElementById('check-btn');
const resultTest = document.querySelector('#result');
const textBox = document.getElementById('text-input');

function cleanString(str) {
    const regex = /[^A-Za-z0-9]/gi;
    const lowerText = str.toLowerCase();
    return lowerText.replace(regex, "");
}

function reverseString(str) {
  const reversedStr = cleanString(str).split('').reverse().join("");
  console.log(cleanString(str));
  console.log(reversedStr);
  return resultTest.textContent = reversedStr;
}

function compareStrings() {
  const textInput = document.querySelector('#text-input').value;
  if (textInput === "") {
    alert("Please input a value");
    return;
  }
  else if (reverseString(textInput) === cleanString(textInput)) 
  {
    resultTest.textContent = `${textInput} is a Palindrome.`
  }
  else {
    resultTest.textContent = `${textInput} is not a Palindrome.`
  }
  textBox.value = "";
}
/*
function clearInput() {
  const textInput = document.getElementById("text-input");
  textInput.value = "";
}

checkButton.addEventListener("click", compareStrings);
*/
//console.log(cleanString("this is . a test").split('').reverse().join(""));


