document.addEventListener("DOMContentLoaded", function() {
  let potentialEdits = document.querySelectorAll('.editable')
  potentialEdits.forEach(edit => {
    edit.addEventListener('click', toggleInput)
  })
})

const toggleInput = (event) => {
  event.target.style.display = 'none'
  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('name', 'updatedBook')
  input.setAttribute('placeholder', event.target.innerHTML)
  event.target.parentNode.appendChild(input)
  input.style.display = 'block'
}
