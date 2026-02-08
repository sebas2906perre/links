const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

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
      font-size:2rem;
      text-align:center;
      padding:20px;">
      <h1>💛 ¡Sabía que dirías que sí! 💛</h1>
      <p style="margin-top:15px;">
        Te amo más que un Minion ama los plátanos 🍌
      </p>
    </div>
  `;
});
