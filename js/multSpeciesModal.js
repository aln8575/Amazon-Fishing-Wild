function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }   
  
  
  function openCustomModal(modalId) {
      document.getElementById(modalId).style.display = 'flex';
    }
  
    // Função para fechar o novo modal
    function closeCustomModal(modalId) {
      document.getElementById(modalId).style.display = 'none';
    }


// Selecionar a logo
const logo = document.querySelector('.logo');

// Função que verifica o scroll da página
window.addEventListener('scroll', function() {
  // Se a página for rolada mais que 100px, a logo some
  if (window.scrollY > 790) {
    logo.classList.add('logo-hidden');
  } else {
    logo.classList.remove('logo-hidden');
  }
});


class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();
