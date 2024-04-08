document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form=document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    listBuilder(e.target.new_task_description.value)
    form.reset()
  })

});

function listBuilder(todo){
  console.log(todo);
  const ul = document.querySelector('#tasks')
  ul.innerHTML +=`<li>${todo}</li>`
  console.log(todo);
}