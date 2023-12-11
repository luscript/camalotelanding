function toggleNavMenu() {
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.getElementById("nav-links");
  
  if (navMenu.classList.contains("open")) {
    navLinks.classList.remove("active");
    navMenu.classList.remove("open");
  } else {
    navMenu.classList.add("open");
    navLinks.classList.add("active");
   
  }
}

document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("nav-menu");
  const navToggleButton = document.getElementById("nav-toggler");
  const navLinks = document.getElementById("nav-links");
  if (!navMenu.contains(event.target) && event.target !== navToggleButton) {
    navMenu.classList.remove("open");
    navLinks.classList.remove("active");
  }
});

window.addEventListener("resize", function (event) {
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.getElementById("nav-links");

  if (window.innerWidth > 600 && navMenu.classList.contains("open")) {
    navMenu.classList.remove("open");
    navLinks.classList.remove("active");
  }
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav li a[href*=" + id + "]")
          .classList.add("active");
      });
      const stateObj = { sectionId: id };
      history.pushState(stateObj, "", `#${id}`);
    }
  });
};

var TrandingSlider = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 40,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});

function sendWhatsapp() {
  let numero = "+543425906133";
  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;

  var url =
    "https://wa.me/" +
    numero +
    "?text=Nombre: " +
    nombre +
    "%0AAsunto: " +
    asunto +
    "%0AMensaje: " +
    mensaje;
  window.open(url, "_blank").focus();
  document.getElementById("nombre").value = "";
  document.getElementById("asunto").value = "";
  document.getElementById("mensaje").value = "";
}

function seleccionarPregunta(classPregunta, imagenClickeada) {
  var imagenes = document.querySelectorAll(".nros-FAQ img");
  imagenes.forEach(function (imagen) {
    imagen.style.opacity = 0.3;
  });
  imagenClickeada.style.opacity = 1;
  let allpregs = document.querySelectorAll(".preg");
  allpregs.forEach((preg) => {
    preg.classList.remove("mostrar");
  });
  let preguntas = document.querySelectorAll("." + classPregunta);
  preguntas.forEach((pregunta) => {
    pregunta.classList.add("mostrar");
  });
}
