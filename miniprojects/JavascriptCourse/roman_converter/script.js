const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

// -------------------------------------------
// ---------- Convertidor --------------------
// -------------------------------------------
const integerToRoman = (input) => {
  let n = parseInt(numberInput.value);

  const number_M = Math.floor(n/1000);
  n = n%1000;
  let ms = "M".repeat(number_M);

  const number_D = Math.floor(n/500);
  n = n%500;
  let ds = "D".repeat(number_D);

  const number_C = Math.floor(n/100);
  n = n%100;
  let cs = "C".repeat(number_C);
    if (number_C == 4) {
      if (number_D == 0) {
        cs = "CD";
      }
      else {
        cs = "CM";
        ds = "";
      }
    }
  
  const number_L = Math.floor(n/50);
  n = n%50;
  let ls = "L".repeat(number_L);

  const number_X = Math.floor(n/10);
  n = n%10;
  let xs = "X".repeat(number_X);
    if (number_X == 4) {
      if (number_L == 0) {
        xs = "XL";
      }
      else {
        xs = "XC";
        ls = "";
      }
    }
  
  const number_V = Math.floor(n/5);
  n = n%5;
  let vs = "V".repeat(number_V);
  let i_s = "I".repeat(n)
    if (n == 4) {
      if (number_V == 0) {
        i_s = "IV";
      }
      else {
        i_s = "IX";
        vs = "";
      }
    }

  const conversion = ms+ds+cs+ls+xs+vs+i_s;
  return conversion;

};


// -------------------------------------------
// ---------- checking input -----------------
// -------------------------------------------
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt <= 0 || inputInt >= 4000) {
      if (inputInt <= 0) 
      {
        result.textContent = "Please enter a number greater than or equal to 1";
        return;
      }
      else if (inputInt >= 4000) {
        result.textContent = "Please enter a number less than or equal to 3999";
        return;
      }
      else {
        result.textContent = "Please enter a valid number";
      return;
      }
  }

  result.textContent = integerToRoman(inputInt);
  numberInput.value = "";
};


// -------------------------------------------
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});


