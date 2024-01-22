fetch ("/forumposts")
.then((response) => {
    return response.json()
})
.then((json) => {
    displayForum(json)
})
.catch((error) => {
    console.log(error)
})

const quotes ="https://zenquotes.io/api/quotes/";

async function getApi(quotes)
{
  let response = await fetch(quotes);
  var data = await response.json();
  console.log(data);
}

getApi(quotes)

function displayForum(json) {

    const forumContainer = document.getElementById("forum-container")
    forumContainer.innerHTML = ""

    json.forEach((forum) => {
        const forumName = forum.name
        const forumImage = forum.image
        const forumTopic = forum.topic

        let forumDiv = document.createElement("div")
        let forumNameTag = document.createElement("p")
        let forumImg = document.createElement("img")
        let forumTopicTag = document.createElement("h1")
        let quoteButton = document.createElement("button")

        forumDiv.appendChild(forumNameTag)
        forumDiv.appendChild(forumImg)
        forumDiv.appendChild(forumTopicTag)

        forumDiv.classList.add("forum")
        forumNameTag.classList.add("forum-name")
        forumImg.classList.add("forum-image")
        forumTopicTag.classList.add("forum-topic")
        quoteButton.classList.add("quote-button")

        forumNameTag.innerText = forumName
        forumImg.src = forumImage
        forumTopicTag.innerText = forumTopic
        quoteButton.innerText = "Get Inspired!"
        quoteButton.click = getApi(quotes)

        forumContainer.appendChild(forumDiv)
        forumConatiner.appendChild(quoteButton)
    })
}