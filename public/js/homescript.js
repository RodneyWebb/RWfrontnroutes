goHome()

function goHome() {

    const homeContainer = document.getElementById("home-container")
    homeContainer.innerHTML = ""

    const homeName = "YOUth Unite"
    const homeImage = "https://images.unsplash.com/photo-1584592487914-a29c64f25887?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


        let homeDiv = document.createElement("div")
        let homeNameTag = document.createElement("h1")
        let aboutButton = document.createElement("button")
        let homeImg = document.createElement("img")
        let email = document.createElement("input")
        let password = document.createElement("input")
        let loginButton = document.createElement("button")
        let registerButton = document.createElement("button")

        email.id = "email"
        password.id = "password"

        homeDiv.appendChild(homeNameTag)
        homeDiv.appendChild(aboutButton)
        homeDiv.appendChild(homeImg)
        homeDiv.appendChild(email)
        homeDiv.appendChild(password)
        homeDiv.appendChild(loginButton)
        homeDiv.appendChild(registerButton)

        homeDiv.classList.add("home")
        homeImg.classList.add("home-image")
        aboutButton.classList.add("about-button")

        homeNameTag.innerText = homeName
        aboutButton.innerText = "Why should YOUth join?"
        aboutButton.onclick = about
        homeImg.src = homeImage
        email.placeholder = "email"
        password.placeholder = "password"
        password.type = "password"
        loginButton.innerText = "Login"
        registerButton.innerText = "Register"
        registerButton.onclick = registerMe
        loginButton.onclick = login

        homeContainer.appendChild(homeDiv)
    }


function login() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let body = {
        "email": email,
        "password": password
    }

    fetch("http://localhost:3000/login", {
        headers: {"Content-Type": "Application-Json"},
        method: "POST",
        body: body
    })
    .then(response => {
        return response.json()
        
    })
    .then(json => {
        console.log(json)
        document.cookie = json.token
        window.location.href = '/login'
    })
}

function about() {
    window.location.href = '/about'
}

function registerMe() {
    window.location.href = '/register'
}