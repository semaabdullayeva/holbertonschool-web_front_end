function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}
function main() {

  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const parag = document.createElement("p");
  parag.textContent = "Welcome Holberton!";
  document.body.appendChild(parag);


  const spookyBtn=document.createElement("button");
  spookyBtn.textContent="Spooky";
  document.body.appendChild(spookyBtn);



  const darkBtn=document.createElement("button");
  darkBtn.textContent="Dark mode";
  document.body.appendChild(darkBtn);



  const screamBtn=document.createElement("button");
  screamBtn.textContent="Scream mode";
  document.body.appendChild(screamBtn);

  spookyBtn.addEventListener("click",spooky);
  darkBtn.addEventListener("click", darkMode);
  screamBtn.addEventListener("click", screamMode);

}
main();

