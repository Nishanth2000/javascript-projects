let btn = document.getElementById("btn");
let output = document.getElementById("output");
const randomqutos = [
  '"You are the shuckiest shuck faced shuck in the world!”',
  "“Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!”",
  "“Insane means fewer cameras!”",
  "“Never ask an elf for help; they might decide your better off dead, eh?”",
  '“Some quotations," said Zellaby, "are greatly improved by lack of context.”',
  "“Whats my age again?”",
  "“Act first, explain later.”",
  "“Hand me my pants,”"
];
btn.addEventListener("click", function () {
  var nish = randomqutos[Math.floor(Math.random() * randomqutos.length)];
  output.innerHTML = nish;
});
