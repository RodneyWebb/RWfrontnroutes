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

        forumDiv.appendChild(forumNameTag)
        forumDiv.appendChild(forumImg)
        forumDiv.appendChild(forumTopicTag)

        forumDiv.classList.add("forum")
        forumNameTag.classList.add("forum-name")
        forumImg.classList.add("forum-image")
        forumTopicTag.classList.add("forum-topic")

        forumNameTag.innerText = forumName
        forumImg.src = forumImage
        forumTopicTag.innerText = forumTopic

        forumContainer.appendChild(forumDiv)
    })
}