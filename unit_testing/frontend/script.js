
const form = document.querySelector("#signupForm")
const passwordInput = document.querySelector("#passwordInput")
const usernameInput = document.querySelector("#usernameInput")
const serverMessage = document.querySelector("#serverMessage")

form.addEventListener("submit", async event => {
  event.preventDefault()

  const password = passwordInput.value
  const name = usernameInput.value

  const result = await fetch('http://localhost:3000/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password })
  }).then(response => response.json())
  
  if (result.message) {
    serverMessage.innerText = result.message
    serverMessage.classList.replace("error", "success")
  }
  if (result.error) {
    serverMessage.innerText = result.error
    serverMessage.classList.replace("success", "error")
  }
  console.log(result)
})