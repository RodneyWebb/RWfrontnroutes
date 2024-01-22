fetch ("/home")
.then((response) => {
    return response.json()
})
.then((json) => {
    newRegister(json)
})
.catch((error) => {
    console.log(error)
})

function newRegister(json) {

    const registerContainer = document.getElementById("register-container")
    registerContainer.innerHTML = ""

    json.forEach((home) => {
        const homeName = home.name
        const homeImage = home.image

        let registerDiv = document.createElement("div")
        let registerNameTag = document.createElement("h1")
        let registerImg = document.createElement("img")
        let username = document.createElement("input")
        let email = document.createElement("input")
        let password = document.createElement("input")
        let registerButton = document.createElement("button")

        registerDiv.appendChild(registerNameTag)
        registerDiv.appendChild(homeImg)
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

        registerContainer.appendChild(registerDiv)
    })
}