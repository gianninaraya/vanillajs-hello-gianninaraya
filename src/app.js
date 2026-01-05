import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    let who = ["The dog", "My sister", "The mailman", "The firefighter", "My boyfriend", "The cat"];
    let action = ["ate", "peed", "crushed", "broke", "stole", "destroyed"];
    let what = ["my homework", "my phone", "my computer", "the car", "my shoes", "my life"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let excuseElement = document.querySelector("#excuse");

    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    let excuse =
      who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen] +
      ".";

    excuseElement.innerHTML = excuse;

  console.log("Excuse:", excuse);
};
