fetch ("/home")
.then((response) => {
    return response.json()
})
.then((json) => {
    goHome(json)
})
.catch((error) => {
    console.log(error)
})

function goHome(json) {

    const homeContainer = document.getElementById("home-container")
    homeContainer.innerHTML = ""

    json.forEach((home) => {
        const homeName = home.name
        const homeImage = home.image

        let homeDiv = document.createElement("div")
        let homeNameTag = document.createElement("h1")
        let aboutButton = document.createElement("button")
        let homeImg = document.createElement("img")
        let email = document.createElement("input")
        let password = document.createElement("input")
        let loginButton = document.createElement("button")
        let registerButton = document.createElement("button")

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
        aboutButton.onclick = aboutApp
        loginButton.onclick = displayForum

        homeContainer.appendChild(homeDiv)
    })
}