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

    document.querySelectorAll('.close').forEach(button => {
      button.addEventListener('click', () => {
          closeModal('modal-4');
      });
  });


  
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("lightboxImg");

let currentIndex = 0;

// Abrir modal
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Navegar -> próximo
document.getElementById("lightboxNext").onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
};

// Navegar -> anterior
document.getElementById("lightboxPrev").onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
};

// Fechar no X
document.getElementById("lightboxClose").onclick = () => {
    modal.style.display = "none";
};

// Fechar clicando fora
modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};



  function showYear(year) {
    document.querySelectorAll('.year-table').forEach(table => {
      table.style.display = 'none';
    });

    document.getElementById('year-' + year).style.display = 'block';

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    event.target.classList.add('active');
  }

