

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))


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