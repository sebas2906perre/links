const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("touchstart", mover);
noBtn.addEventListener("mouseover", mover);

function mover() {
  const desplazamiento = Math.random() > 0.5 ? -120 : 120;
  noBtn.style.transform = `translateX(${desplazamiento}px)`;
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
      <h1> ¡Lo Sabía 😞! </h1>
      <p style="font-size:1.5rem;">Mala Mujer</p>
    </div>
  `;
});

