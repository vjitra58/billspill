let bill = document.querySelector(".bill_input");
let tipContainer = document.querySelector(".tip_div");
let tips = document.getElementsByClassName("tip");

let people = document.querySelector(".people > span");
let increase = document.getElementById("add");
let decrease = document.getElementById("subtract");
let generate = document.querySelector("#generate");
let reset = document.querySelector("#reset");

let billValue = 0;
let tipValue = 0;
let peoples = 1;

let rupeeSymbol = "U+20B9";

increase.addEventListener("click", () => {
  peoples += 1;
  console.log(peoples);
  people.innerHTML = peoples;
});

decrease.addEventListener("click", () => {
  if (peoples == 1) return;
  peoples -= 1;
  console.log(peoples);
  people.innerHTML = peoples;
});

bill.addEventListener("input", (e) => {
  if (e.data != null && !e.data.match(/[0-9]/)) {
    alert("please enter numbers only");
  }
  billValue = bill.value.match(/[0-9]+/);
  bill.value = billValue;
});

for (let i = 0; i < tips.length; i++) {
  tips[i].addEventListener("click", function () {
    let currtip = document.getElementsByClassName("active");
    if (currtip.length > 0) {
      currtip[0].className = currtip[0].className.replace("active", "");
    }
    this.className += " active";
    tipValue = this.innerText.match(/[0-9]+/)[0];
  });
}

generate.addEventListener("click", (e) => {
  console.log(generate.innerHTML);
  //   console.log(e.target);
  calculate();
});

reset.addEventListener("click", () => {
  billValue = 0;
  bill.value = billValue;
  peoples = 1;
  people.innerHTML = peoples;
  tipValue = 0;
  for (let i = 0; i < tips.length; i++) {
    tips[i].className = "tip";
  }
  document.getElementById(
    "perPersonTip"
  ).innerHTML = `<span>&#8377;</span>0.00`;
  document.getElementById(
    "perPersonTotal"
  ).innerHTML = `<span>&#8377;</span>0.00`;
});

const calculate = () => {
  console.log("bill value : ", billValue);
  console.log("tip value : ", tipValue);
  console.log("peoples value : ", peoples);
  let tipPerPerson = Math.round((billValue * tipValue) / 100 / peoples);
  console.log("tip per person is : ", tipPerPerson);
  let totalPerPerson = Math.round((billValue * (1 + tipValue / 100)) / peoples);
  console.log("total per person is : ", totalPerPerson);
  display(tipPerPerson, totalPerPerson);
};

function display(tip, total) {
  document.getElementById(
    "perPersonTip"
  ).innerHTML = `<span>&#8377;</span>${tip}`;
  document.getElementById(
    "perPersonTotal"
  ).innerHTML = `<span>&#8377;</span>${total}`;
}
