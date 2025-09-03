 function showFlower(){
            document.getElementById("intro").style.display = 'none';
            const night = document.getElementById("night");
            night.style.display
        }

onload = () => {
  document.body.classList.remove("container");
};

function showFlower() {
  const flower = document.getElementById("flowers"); // match uppercase F
  flower.classList.add("show");
  
   intro.style.display = "none";
  // Restart animations for all parts
  flower.querySelectorAll(".flower, .grow-ans, .growing-grass, .long-g").forEach((el, i) => {
    el.style.animation = "none";   // reset
    void el.offsetWidth;           // reflow trick
    el.style.animation = "";       // let CSS animations play again
  });
}
