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


// const forumTitle = "YOUth Unite Forum"
// forumTitle.classList.add("forum-title")
// forumContainer.appendChild(forumTitle)


function displayForum(json) {

    const forumContainer = document.getElementById("forum-container")
    forumContainer.innerHTML = ""

    json.forEach((forum) => {
        const forumImage = forum.image
        const forumName = forum.name
        const forumTopic = forum.topic

        let forumDiv = document.createElement("div")
        let forumImg = document.createElement("img")
        let forumNameTag = document.createElement("p")
        let forumTopicTag = document.createElement("h2")
        let responseDiv = document.createElement("div")
        let forumResponse = document.createElement("input")
        let textDiv = document.createElement("div")
        let wordsDiv = document.createElement("div")

        forumDiv.appendChild(forumImg)
        forumDiv.appendChild(textDiv)
        textDiv.appendChild(wordsDiv)
        wordsDiv.appendChild(forumNameTag)
        wordsDiv.appendChild(forumTopicTag)
        textDiv.appendChild(forumResponse)

        forumDiv.classList.add("forum")
        forumImg.classList.add("forum-image")
        textDiv.classList.add("text-section")
        wordsDiv.classList.add("words-section")
        forumNameTag.classList.add("forum-name")
        forumTopicTag.classList.add("forum-topic")
        forumResponse.classList.add("forum-response")

        forumImg.src = forumImage
        forumNameTag.innerText = forumName
        forumTopicTag.innerText = forumTopic
        forumResponse.placeholder = "Contribute YOUr Thoughts Here!"
        forumResponse.innerText = ""

        forumContainer.appendChild(forumDiv)
        forumContainer.appendChild(responseDiv)
    })

    // let quoteButton = document.createElement("button")
    // quoteButton.innerText = "Get Inspired!"
    // quoteButton.click = getQuote(quotes)
    // quoteButton.classList.add("quote-button")

    forumContainer.appendChild(quoteButton)
}