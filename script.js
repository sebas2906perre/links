const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", moverBoton);
noBtn.addEventListener("touchstart", moverBoton);

function moverBoton() {
  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(180deg,#ff9a9e,#fad0c4);
      color:white;
      text-align:center;
      padding:20px;">
      <h1> ¡Lo Sabía😞! </h1>
      <p style="font-size:1.5rem;">Igual Celoso no Soy🥵</p>
    </div>
  `;
});
