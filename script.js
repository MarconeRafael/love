document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");
  
    // Ao clicar em "Sim", oculta a pergunta e mostra a mensagem romântica
    yesBtn.addEventListener("click", function () {
      document.getElementById("question").classList.add("d-none");
      message.classList.remove("d-none");
    });
  
    // Reposiciona o botão "Não" aleatoriamente na tela
    function repositionNoButton() {
      const randomTop = Math.floor(Math.random() * 80) + 10; // entre 10vh e 90vh
      const randomLeft = Math.floor(Math.random() * 80) + 10; // entre 10vw e 90vw
      noBtn.style.position = "absolute";
      noBtn.style.top = randomTop + "vh";
      noBtn.style.left = randomLeft + "vw";
    }
  
    // Ao clicar ou passar o mouse sobre "Não", reposiciona-o
    noBtn.addEventListener("click", repositionNoButton);
    noBtn.addEventListener("mouseover", repositionNoButton);
  });
  