import { Widget } from "./widget";
import { Collapsible } from "./collapsible";

const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const widget1 = new Widget(container1, 1);
widget1.bindToDOM();
const widget2 = new Widget(container2, 2);
widget2.bindToDOM();

const buttons = document.querySelectorAll(".btn");

const collapsibleFactory = new Collapsible();

function showCollapsible(e) {
  const button = e.target;
  button.classList.toggle("collapsible-show");

  if (button.classList.contains("collapsible-show")) {
    collapsibleFactory.showCollapsible(
      `${button.dataset.collapsibleText - 1}`,
      e.target
    );
  } else {
    collapsibleFactory.closeCollapsible();
  }
}

for (let button of buttons) {
  button.addEventListener("click", showCollapsible);
}
