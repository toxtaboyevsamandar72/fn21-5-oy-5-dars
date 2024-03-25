let formEl = document.querySelector("form");
let inputEl = document.querySelector("input");
let ulEl = document.querySelector("ul");
let counterEl = document.querySelector("p");

formEl.addEventListener("submit", (e) => {
  let counter = 0;
  e.preventDefault();
  let inputvalue = inputEl.value;

  let newLi = document.createElement("li");
  let newspan = document.createElement("span");
  let newdonebutton = document.createElement("button");
  let newDeletebutton = document.createElement("button");

  newdonebutton.setAttribute("class", "done-btn");
  newDeletebutton.setAttribute("class", "delete-btn");
  newdonebutton.textContent = "Done";
  newDeletebutton.textContent = "delete";
  newspan.textContent = inputvalue;

  newLi.appendChild(newspan);
  newLi.appendChild(newdonebutton);
  newLi.appendChild(newDeletebutton);

  ulEl.appendChild(newLi);

  let donebuttons = document.querySelectorAll(".done-btn");
  let deletebuttons = document.querySelectorAll(".delete-btn");

  deletebuttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
      counter = ulEl.children.length;
      counterEl.textContent = counter;
      new Audio("./music/res.mp3").play();
    });
  });

  donebuttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.parentElement.classList);
      if (!button.parentElement.classList.contains("done")) {
        button.parentElement.classList.add("done");
        new Audio("./music/sar.mp3").play();
      } else {
        button.parentElement.classList.remove("done");
      }
    });
  });

  counter = ulEl.children.length;
  counterEl.textContent = counter;

  inputEl.value = "";
  new Audio("./music/analog-appliance-button-2-185277.mp3").play();
});

inputEl.addEventListener("click", () => {
  new Audio("./music/typing.mp3").play();
});
