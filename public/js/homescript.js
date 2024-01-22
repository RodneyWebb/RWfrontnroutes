goHome()

function goHome() {

    const homeContainer = document.getElementById("home-container")
    homeContainer.innerHTML = ""

    const homeName = "YOUth Unite"
        const homeImage = "https://previews.123rf.com/images/topvectors/topvectors1907/topvectors190700803/127135889-happy-young-men-and-women-standing-together-diverse-multiracial-group-of-people-social-diversity.jpg"


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

        homeNameTag.innerText = homeName
        aboutButton.innerText = "About"
        homeImg.src = homeImage
        email.placeholder = "email"
        password.placeholder = "password"
        loginButton.innerText = "Login"
        registerButton.innerText = "Register"
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