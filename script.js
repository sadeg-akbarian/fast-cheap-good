const theInputs = document.querySelectorAll("input");
const checkedBoxes = [];

for (let i = 0; i < theInputs.length; i++) {
  theInputs[i].addEventListener("change", function (event) {
    if (theInputs[i].checked === true) {
      if (checkedBoxes.length === 2) {
        checkedBoxes[1].checked = false;
        checkedBoxes.pop();
      }
      checkedBoxes.push(theInputs[i]);
    } else {
      checkedBoxes.pop();
    }
  });
}
