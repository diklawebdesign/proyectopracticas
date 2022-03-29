// Fotos de Primera linea, y tercera linea
function reveal() {
  var reveals = document.querySelectorAll(".card");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


// Foto de la segunda linea
function reveal1() {
  var reveals1 = document.querySelectorAll(".imageEfectJava");

  for (var i = 0; i < reveals1.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals1[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals1[i].classList.add("active1");
    } else {
      reveals1[i].classList.remove("active1");
    }
  }
}

window.addEventListener("scroll", reveal1);
