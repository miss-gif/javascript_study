let text = "";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  text += `안녕하세요 <br>`;
  document.getElementById("show").innerHTML = text;
});

btn.addEventListener("click", () => {
  text += `ㅎㅇㅇ <br>`;
  document.getElementById("show").innerHTML = text;
});
