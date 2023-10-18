function passwordValidation(event) {
  let upper, lower, number, length;
  console.log(event.target.value);
  const currentVal = event.target.value;
  for (let i = 0; i < currentVal.length; i++) {
    if (currentVal[i] >= "A" && currentVal[i] <= "Z") {
      const upperVal = document.getElementById("upper1");
      upperVal.style.display = "inline";
      upper = true;
    }
    if (currentVal[i] >= "a" && currentVal[i] <= "z") {
      const lowerVal = document.getElementById("lower1");
      lowerVal.style.display = "inline";
      lower = true;
    }

    if (currentVal[i] >= 0 && currentVal[i] <= 9) {
      const numberVal = document.getElementById("number1");
      numberVal.style.display = "inline";
      number = true;
    }
    if (currentVal.length >= 8) {
      const lengthVal = document.getElementById("length1");
      lengthVal.style.display = "inline";
      length=true;
    }
  }

  if (!upper) {
    const upperVal = document.getElementById("upper1");
    upperVal.style.display = "none";
  }
  if (!lower) {
    const upperVal = document.getElementById("lower1");
    upperVal.style.display = "none";
  }
  if (!number) {
    const upperVal = document.getElementById("number1");
    upperVal.style.display = "none";
  }
  if (!length) {
    const upperVal = document.getElementById("length1");
    upperVal.style.display = "none";
  }
}
