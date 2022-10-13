let countEl = document.getElementById("count-el");
let countTwo = document.getElementById("count-two");

let count = 0;

function increment() {
  count++;
  countEl.innerText = count;
}

function save(){
  let countStr = count + " - "
 countTwo.textContent += countStr;
   countEl.textContent = 0
    count = 0
}

