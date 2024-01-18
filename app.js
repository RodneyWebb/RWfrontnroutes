const express = require("express")
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))

let forumPosts = [
    {
        "name": "Webb State",
        "image": "https://www.district205.net/cms/lib/IL01001003/Centricity/Domain/86/path.gif",
        "topic": "I don't know if I should go to college or get a job after high school. Does anyone have any advice to help me decide what's best for ME?"
    },
    {
        "name": "Marty J",
        "image": "https://qph.cf2.quoracdn.net/main-qimg-205ea7a4020483e4ae4cfe1f70dfbc31",
        "topic": "My Parents think they're supportive, but they're actually pushing me further away. Should I tell them how I'm feeling? How should I go about   doing this??"
    },
    {
        "name": "Amora",
        "image": "https://img.freepik.com/free-vector/banknote-concept-illustration_114360-5881.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1700697600&semt=ais",
        "topic": "As a young adult I enjoy making money, but how do I prepare for my future financially? Any money tips are much appreciated!"
    }
]

//Route to View App Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/rw-capstoneindex.html'))
})

// //Register a New User
// app.post('/users', queries.registerUser)

// //Login
// app.post('/login', queries.login)

//Route to display ALL Forum Posts
app.get("/forumposts", (req, res) => {
    res.send(forumPosts)
})

app.listen(3000)
console.log("All Aboard the Running Express!")