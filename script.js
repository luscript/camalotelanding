


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

document.querySelectorAll(".navbarMenuLinks a").forEach((link) => {
  link.addEventListener("click", function () {
    // Cerrar el menú en dispositivos móviles después de hacer clic en un enlace
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.getElementById("nav-links");
    navMenu.classList.remove("open");
    navLinks.classList.remove("active");

    // Remover clase 'active' de todos los enlaces
    document.querySelectorAll(".navbarMenuLinks a").forEach((link) => {
      link.classList.remove("active-mobile");
    });

    // Agregar clase 'active' al enlace clicado
    this.classList.add("active-mobile");
    
  });
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
        links.classList.remove("active-mobile");
        document
          .querySelector(".nav li a[href*=" + id + "]")
          .classList.add("active");
      });
       // Agregar clase 'active-mobile' al enlace correspondiente en la barra de navegación móvil
       const mobileLink = document.querySelector(`.navbarMenuLinks a[href*=${id}]`);
       if (mobileLink) {
         mobileLink.classList.add("active-mobile");
       }
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
  let localidad = document.getElementById("localidad").value;
  let mensaje = document.getElementById("mensaje").value;

  var url =
    "https://wa.me/" +
    numero +
    "?text=Hola! Soy " + nombre +". Te escribo desde " + localidad + ". " + mensaje;
  window.open(url, "_blank").focus();
  document.getElementById("nombre").value = "";
  document.getElementById("localidad").value = "";
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
