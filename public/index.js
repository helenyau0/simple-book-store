document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.addBook').addEventListener('click', displayModal)
  document.querySelector('.close').addEventListener('click', closeModal)
  document.querySelector('.exit').addEventListener('click', closeModal)
})

const displayModal = () => {
  document.querySelector('.myModal').style.display = 'block'
}

const closeModal = () => {
  document.querySelector('.myModal').style.display = 'none'
}
