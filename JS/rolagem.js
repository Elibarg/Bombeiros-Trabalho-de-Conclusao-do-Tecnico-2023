var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: true,
    on: {
      slideChange: function () {
        document.documentElement.scrollTop = 0; // Para navegadores modernos
        document.body.scrollTop = 0; // Para navegadores antigos

        if (swiper.activeIndex === 20) {
          // Navega de volta para o slide 19
          swiper.slideTo(19);
        }
      }
    }
  });

function navigateToSlide(slideNumber) {
 var sexoPacienteF = document.getElementById("sexo_paciente_f");
 if(!sexoPacienteF.checked && slideNumber >= 16){
  slideNumber = slideNumber - 1;
  swiper.slideTo(slideNumber - 1, 0);
 }else{
  swiper.slideTo(slideNumber - 1, 0);
 }
 console.log("Redirecionando para o slide: " + slideNumber)
}
  
var menuIcons = document.getElementsByClassName("menu-icon");//TRAZ BARRA LATERAL PARA A TELA E A RETIRA
var barraLateral = document.querySelector(".barra-Lateral");

    for (var i = 0; i < menuIcons.length; i++) {
      menuIcons[i].addEventListener("click", function() {
        if (barraLateral.style.left === "-220px") {
          barraLateral.style.left = "0";
        } else {
          barraLateral.style.left = "-220px";
        }
      });
    }

document.addEventListener("click", function(event) {//TRAZ BARRA LATERAL PARA A TELA E A RETIRA
var isClickedInsideBarraLateral = barraLateral.contains(event.target);
var isClickedMenuIcon = event.target.classList.contains("menu-icon");
  
      if (!isClickedInsideBarraLateral && !isClickedMenuIcon) {
        barraLateral.style.left = "-220px";
      }
    });

var menuIcons = document.getElementsByClassName("menu-icon");

    for (var i = 0; i < menuIcons.length; i++) {//MUDA A OPACIDADE DA IMAGEM APÓS O CLIQUE
      menuIcons[i].addEventListener("click", function(event) {
        var clickedIcon = event.target;
        clickedIcon.classList.add("clicked");

        setTimeout(function() {
          clickedIcon.classList.remove("clicked");
        }, 100); // Remove a classe "clicked" após 1 milisegundo (100 milissegundos)
      });
    }
