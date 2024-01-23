function newRegister() {

    const registerContainer = document.getElementById("register-container")
    registerContainer.innerHTML = ""
    //Change Homename to website name
    //Change homeimage to image link or something
        const homeName = "YOUth Unite"
        const homeImage = "https://images.unsplash.com/photo-1591197172062-c718f82aba20?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        let registerDiv = document.createElement("div")
        let registerNameTag = document.createElement("h1")
        let registerImg = document.createElement("img")
        let username = document.createElement("input")
        let email = document.createElement("input")
        let password = document.createElement("input")
        let registerButton = document.createElement("button")

        username.id = "username"
        email.id = 'email'
        password.id = 'password'

        registerDiv.appendChild(registerNameTag)
        registerDiv.appendChild(registerImg)
        registerDiv.appendChild(username)
        registerDiv.appendChild(email)
        registerDiv.appendChild(password)
        registerDiv.appendChild(registerButton)

        registerDiv.classList.add("register")
        registerImg.classList.add("register-image")

        registerNameTag.innerText = homeName
        registerImg.src = homeImage
        username.placeholder = "username"
        email.placeholder = "email"
        password.placeholder = "password"
        registerButton.innerText = "Register"
        registerButton.onclick = register

        registerContainer.appendChild(registerDiv)
    }

function register() {
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    const body = {
        "email": email,
        "username": username,
        "password": password
    }

    fetch("http://localhost:3000/register", {
        headers: {"Content-Type": "Application-Json"},
        method: "POST",
        body: JSON.stringify(body)
    })
    .then(response => {
        if(response.status === 200) {
            alert("Account created! Please log in to continue.")
            window.location.href = "/"
        } else {
            alert("Registration Unsuccussful. Please try again.")
        }
    })
}

newRegister()
