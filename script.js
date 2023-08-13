const fastCheckbox = document.querySelector("#fastCheckbox");
const cheapCheckbox = document.querySelector("#cheapCheckbox");
const goodCheckbox = document.querySelector("#goodCheckbox");

const checkedChechboxes = [];

fastCheckbox.addEventListener("input", function (event) {
  if (fastCheckbox.hasAttribute("checked") === false) {
    fastCheckbox.setAttribute("checked", "");
    checkedChechboxes.push(event.target);
    console.log(checkedChechboxes);
    document.body.style.backgroundColor = "blue";
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
      console.log(lastCheckedCheckbox);
    }
  } else {
    fastCheckbox.removeAttribute("checked");
    document.body.style.backgroundColor = "blue";
  }
  console.log(event.target);
});

cheapCheckbox.addEventListener("input", function (event) {
  if (cheapCheckbox.hasAttribute("checked") === false) {
    cheapCheckbox.setAttribute("checked", "");
    checkedChechboxes.push(event.target);
    console.log(checkedChechboxes);
    document.body.style.backgroundColor = "red";
    if (
      fastCheckbox.hasAttribute("checked") &&
      goodCheckbox.hasAttribute("checked")
    ) {
      const arrayLength = checkedChechboxes.length;
      const lastCheckedCheckbox = checkedChechboxes[arrayLength - 2];
      lastCheckedCheckbox.checked = false;
      const index = checkedChechboxes.indexOf(lastCheckedCheckbox);
      if (index > -1) {
        checkedChechboxes.splice(index, 1);
      }
      console.log(lastCheckedCheckbox);
    }
  } else if (cheapCheckbox.hasAttribute("checked") === true) {
    cheapCheckbox.removeAttribute("checked");
    document.body.style.backgroundColor = "blue";
  }
  console.log(event.target);
});

goodCheckbox.addEventListener("input", function (event) {
  if (goodCheckbox.hasAttribute("checked") === false) {
    goodCheckbox.setAttribute("checked", "");
    checkedChechboxes.push(event.target);
    console.log(checkedChechboxes);
    document.body.style.backgroundColor = "blue";
    if (
      cheapCheckbox.hasAttribute("checked") &&
      fastCheckbox.hasAttribute("checked")
    ) {
      const arrayLength = checkedChechboxes.length;
      const lastCheckedCheckbox = checkedChechboxes[arrayLength - 2];
      lastCheckedCheckbox.checked = false;
      const index = checkedChechboxes.indexOf(lastCheckedCheckbox);
      if (index > -1) {
        checkedChechboxes.splice(index, 1);
      }
      console.log(lastCheckedCheckbox);
    }
  } else {
    goodCheckbox.removeAttribute("checked");
    document.body.style.backgroundColor = "blue";
  }
  console.log(event.target);
});
