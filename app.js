const express = require("express")
const path = require('path')
const queries = require('./queries')
const app = express()

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
        "image": "https://previews.123rf.com/images/topvectors/topvectors1907/topvectors190700803/127135889-happy-young-men-and-women-standing-together-diverse-multiracial-group-of-people-social-diversity.jpg"
    }
]

let about = [
    {
        "name": "What is YOUth Unite?",
        "image": "https://previews.123rf.com/images/topvectors/topvectors1907/topvectors190700803/127135889-happy-young-men-and-women-standing-together-diverse-multiracial-group-of-people-social-diversity.jpg",
        "why": "YOUth United was created to give young people a digital platform that focuses on Communication, Networking and Peer-to-Peer Mentorship. Teens and young adults are invited to engage with the forum by viewing posts from peers, as well as make a post of their own. Each post is unique to the person creating it, with a goal of bringing about a more unififed group of YOUth that embraces what one another has to offer for collective growth.",
        "color": "The blue background represents Unity - this color also represents  In West and Southern African cultures, blue is a vital color that represents love, harmony, and togetherness"
    }
]

//Route to View App Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/homeindex.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/logindex.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/registerindex.html'))
})

app.get('/about', (req, res) => [
    res.sendFile(path.join(__dirname, '/public/html/aboutindex.html'))
])

//Route to display ALL Forum Posts
app.get("/forumposts", (req, res) => {
    res.send(forumPosts)
})

app.listen(3000)
console.log("All Aboard the Running Express!")