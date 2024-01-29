// Get Elements From Html
let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let list = document.querySelector(".classes-list");
let listDiv = document.querySelector(".classes-list div");
let cDiv = document.querySelector("[title='Current']");

// Action
add.onblur = function (e) {
  let ch = add.value.split(" ");
  ch.sort();
  for (let i = 0; i < ch.length; i++) {
    if (ch[i] == "") {
      continue;
    }
    let element = ch[i];
    let mySpan = document.createElement("span");
    mySpan.textContent = element.toLowerCase();
    // cDiv.className = add.value;
    cDiv.classList.add(ch[i]);
    listDiv.appendChild(mySpan);
  }
  add.value = "";
};
remove.onblur = function (e) {
  let del = remove.value.toLowerCase().split(" "); // make array
  for (let x = 0; x < del.length; x++) {
    if (del[x] == "") {
      continue;
    }
    for (let i = 0; i < listDiv.children.length; i++) {
      if (del[x] === listDiv.children[i].textContent)
        listDiv.children[i].remove();
        cDiv.classList.remove(del[x]);
    }
  }
  remove.value = "";
};
