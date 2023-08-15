/*
const fastCheckbox = document.querySelector("#fastCheckbox");
const cheapCheckbox = document.querySelector("#cheapCheckbox");
const goodCheckbox = document.querySelector("#goodCheckbox");

const checkedChechboxes = [];

fastCheckbox.addEventListener("input", function (event) {
  if (fastCheckbox.hasAttribute("checked") === false) {
    fastCheckbox.setAttribute("checked", "");
    checkedChechboxes.push(event.target);
    if (
      cheapCheckbox.hasAttribute("checked") &&
      goodCheckbox.hasAttribute("checked")
    ) {
      const arrayLength = checkedChechboxes.length;
      const lastCheckedCheckbox = checkedChechboxes[arrayLength - 2];
      lastCheckedCheckbox.checked = false; // Hier die Änderung
      const index = checkedChechboxes.indexOf(lastCheckedCheckbox);
      if (index > -1) {
        checkedChechboxes.splice(index, 1);
      }
    }
  } else {
    fastCheckbox.removeAttribute("checked");
  }
});

cheapCheckbox.addEventListener("input", function (event) {
  if (cheapCheckbox.hasAttribute("checked") === false) {
    cheapCheckbox.setAttribute("checked", "");
    checkedChechboxes.push(event.target);
    if (
      fastCheckbox.hasAttribute("checked") &&
      goodCheckbox.hasAttribute("checked")
    ) {
      const arrayLength = checkedChechboxes.length;
      const lastCheckedCheckbox = checkedChechboxes[arrayLength - 2];
      lastCheckedCheckbox.removeAttribute("checked");
      lastCheckedCheckbox.checked = false;
      const index = checkedChechboxes.indexOf(lastCheckedCheckbox);
      if (index > -1) {
        checkedChechboxes.splice(index, 1);
      }
    }
  } else if (cheapCheckbox.hasAttribute("checked") === true) {
    cheapCheckbox.removeAttribute("checked");
  }
});

goodCheckbox.addEventListener("input", function (event) {
  if (goodCheckbox.hasAttribute("checked") === false) {
    goodCheckbox.setAttribute("checked", "");
    checkedChechboxes.push(event.target);
    if (
      cheapCheckbox.hasAttribute("checked") &&
      fastCheckbox.hasAttribute("checked")
    ) {
      const arrayLength = checkedChechboxes.length;
      const lastCheckedCheckbox = checkedChechboxes[arrayLength - 2];
      lastCheckedCheckbox.removeAttribute("checked");
      lastCheckedCheckbox.checked = false;
      const index = checkedChechboxes.indexOf(lastCheckedCheckbox);
      if (index > -1) {
        checkedChechboxes.splice(index, 1);
      }
    }
  } else {
    goodCheckbox.removeAttribute("checked");
  }
});
*/

const theInputs = document.querySelectorAll("input");
const checkedBoxes = [];

for (let i = 0; i < theInputs.length; i++) {
  theInputs[i].addEventListener("input", function () {
    if (theInputs[i].checked === true) {
      if (checkedBoxes.length === 2) {
        checkedBoxes[1].checked = false;
        checkedBoxes.pop();
      }
      checkedBoxes.push(theInputs[i]);
      console.log(checkedBoxes);
    } else {
      checkedBoxes.pop();
      console.log(checkedBoxes);
    }
  });
}

/*
const theInputs = document.querySelectorAll("input");
let checkedBoxesAmount = 0;
let checkedBoxes = null;

for (let i = 0; i < theInputs.length; i++) {
  theInputs[i].addEventListener("input", function () {
    console.log(theInputs[i]);
    if (theInputs[i].checked === true) {
      if (checkedBoxesAmount === 2) {
        checkedBoxes.checked = false;
        checkedBoxesAmount--;
      }
      checkedBoxes = theInputs[i];
      checkedBoxesAmount++;
    } else {
      checkedBoxesAmount--;
    }
  });
}
*/
