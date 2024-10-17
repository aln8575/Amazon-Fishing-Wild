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
