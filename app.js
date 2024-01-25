const express = require("express")
const path = require('path')
const queries = require('./queries')
const app = express()
const bodyParser = require('body-parser')

const cors = require("cors");
const corsOptions = {
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
 
app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/public')))

let forumPosts = [
    {
        "name": "Webber",
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
    },
    {
        "name": "Nisha",
        "image": "https://i.graphicmama.com/uploads/2021/3/6054b3dcdb982-Pop%20Art%20Style%20Female%20Nurse%20Cartoon%20Character_tiny.png",
        "topic": "Can anyone connect me to a Woman who is currently working in the Nursing field? I'm interested in becoming a Registered Nurse(RN) and would like to know more from a professional."
    },
    {
       "name": "Andy",
       "image": "https://img.freepik.com/free-vector/social-team-helping-charity-sharing-hope_74855-6660.jpg",
       "topic": "I need to complete some Community Service hours before my High School Graduation. Are there any organizations in Louisville, KY looking for Volunteers?"
    }
]

let home = [
    {
        "name": "YOUth Unite",
        "image": "https://images.unsplash.com/photo-1591197172062-c718f82aba20?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

let about = [
    {
        "name": "What is YOUth Unite?",
        "why": "YOUth United was created to give young people a digital platform that focuses on Communication, Networking and Peer-to-Peer Mentorship. Teens and young adults are invited to engage with the forum by viewing posts from peers, as well as make a post of their own. Each post is unique to the person creating it, with a goal of bringing about a more unififed group of YOUth that embraces what one another has to offer for collective growth.",
        "color": "The purpose of 'YOUth United' is to create and promote Unity among young people. Unity can also be associated with the color blue, so in connection the blue background throughout this App's presentation represents Unity! Blue can also represent Tranquility, Integrity, Serenity, Reflection, Wisdom and Dependability. In West and Southern African cultures, blue is a vital color that represents LOVE, Harmony, and Togetherness.",
        "image": "https://images.unsplash.com/photo-1468421870903-4df1664ac249?q=80&w=3052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

//Route to View App Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/homeindex.html'))
})

//Route to Login into 'YOUth United' App
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/logindex.html'))
})

//Route to Access 'Register' Page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/registerindex.html'))
})

//Route to View 'About' Page
app.get('/about', (req, res) => [
    res.sendFile(path.join(__dirname, '/public/html/aboutindex.html'))
])

//Route to login and display ALL Forum Posts
app.get("/forumposts", (req, res) => {
    res.send(forumPosts)
})

app.get("/aboutinfo", (req, res) => {
    res.send(about)
})

app.get('/testimonies', (req, res) => [
    res.sendFile(path.join(__dirname, '/public/html/testimonyindex.html'))
])

app.post('/login', queries.login) 
app.post('/register', queries.newRegister)

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  })

app.listen(3000)
console.log("All Aboard the Running Express!")