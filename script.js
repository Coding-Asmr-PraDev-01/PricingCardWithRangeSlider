const inputRange = document.querySelector('input[type="range"]');
const fakeRange = document.querySelector(".fake-range");
const thumb = document.querySelector(".thumb");
const price = document.querySelector(".price");
const wordCount = document.querySelector('.wordCount');

let initPrice = 29;
let initWordCount = 20000;
let max = +inputRange.getAttribute("max");
let min = +inputRange.getAttribute("min");

inputRange.addEventListener("change", (e) => {
  let currentVal = +e.target.value;

  let customVars = window.getComputedStyle(fakeRange);
  let widthVar = customVars.getPropertyValue("--width");
  
  fakeRange.style.setProperty("--width", `${calc(currentVal)}`);

  thumb.style.transform = `translateX(${currentVal == max ? "-100%" : "0"})`;
  price.textContent = `$${initPrice * currentVal}`;  
  wordCount.textContent = `${initWordCount * currentVal}`;
});

function calc(currentVal) {
  if (currentVal === min) {
    return "0%";
  }
  if (currentVal === max) {
    return "100%";
  }
  return `${(currentVal - 1) * 20}%`;
}
