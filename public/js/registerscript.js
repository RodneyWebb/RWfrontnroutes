function newRegister() {

    const registerContainer = document.getElementById("register-container")
    registerContainer.innerHTML = ""
    //Change Homename to website name
    //Change homeimage to image link or something
        const homeName = "YOUth Unite"
        const homeImage = "https://previews.123rf.com/images/topvectors/topvectors1907/topvectors190700803/127135889-happy-young-men-and-women-standing-together-diverse-multiracial-group-of-people-social-diversity.jpg"

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
            alert("Account created please login to continue")
            window.location.href = "/"
        } else {
            alert("Something went wrong please try again")
        }
    })
}

newRegister()
