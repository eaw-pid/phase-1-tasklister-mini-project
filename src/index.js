document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDo(e.target["new-task-description"].value)
    form.reset()
  })
});

function createToDo(todo) {
  console.log(todo)
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let dropdown = document.createElement('select')
  let option0 = new Option("Select Priority")
  let option1 = new Option("High", "red")
  let option2 = new Option("Medium", "green")
  let option3 = new Option("Low", "blue")
  option1.style.backgroundColor = 'red'
  option2.style.backgroundColor = 'green'
  option3.style.backgroundColor = 'blue'
  dropdown.appendChild(option0)
  dropdown.appendChild(option1)
  dropdown.appendChild(option2)
  dropdown.appendChild(option3)
  btn.addEventListener('click', removeToDo)
  
  p.textContent = `${todo} `
  btn.textContent = 'x'
  p.appendChild(btn)
  p.appendChild(dropdown)
  document.querySelector('#list').appendChild(p)
}

function removeToDo(e) {
  e.target.parentNode.remove()
}

//Change Dropdown Text Color
function changeColor(e) {
  console.log(e)
  let color = e.value
  e.target.style.backgroundColor = color
}


/*
dropdown.addEventListener('change', (e) => {
    console.log(option1.innerText)
    if(e.target.value === option1.innerText) {
      e.target.style.backgroundColor = option1.style.backgroundColor
    }
  })


dropdown.addEventListener('change', (e) => {
  console.log(e.dropdown)
  console.log(option1.text)
  if(e.target === option1.value) {
    console.log(e.target)
    p.innerText.color = red
  }
})
*/