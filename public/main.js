document.addEventListener("DOMContentLoaded", function() {
  let potentialEdits = document.querySelectorAll('.editable')
  potentialEdits.forEach(edit => {
    edit.addEventListener('click', toggleInput)
  })
})

const toggleInput = (event) => {
  event.target.style.display = 'none'
  const i = document.createElement('input')
  i.setAttribute('type', 'text')
  i.setAttribute('name', 'updatedBook')
  i.setAttribute('placeholder', event.target.innerHTML)
  event.target.parentNode.appendChild(i)
  i.style.display = 'block'
}
