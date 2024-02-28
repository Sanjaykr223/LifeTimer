let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const toggleDateOfBirthSelector = () => {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;
  console.log("toggle", isDOBOpen);
};

const setDOBHandler = () => {
  dateOfBirth = dobInputEl.value;
//   if (dateOfBirth) {
//     initialTextEl.classList.add("hide");
//     afterDOBBtnTxtEl.classList.remove("hide");
//   } else {
//     afterDOBBtnTxtEl.classList.add("hide");
//     initialTextEl.classList.remove("hide");
//   }
console.log("date of birth", dateOfBirth);
};

setDOBHandler();

settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click", toggleDateOfBirthSelector);
