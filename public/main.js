document.addEventListener("DOMContentLoaded", function() {
  let potentialEdits = document.querySelectorAll('.editable')
  potentialEdits.forEach(edit => {
    edit.addEventListener('click', toggleInput)
  })
})

const toggleInput = (event) => {
  console.log('target', event.target.parentNode);
  event.target.style.display = 'none'
  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('name', 'updatedBook')
  input.setAttribute('value', event.target.innerHTML)
  event.target.parentNode.appendChild(input)
  input.style.display = 'block'
}
