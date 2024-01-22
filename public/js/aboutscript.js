fetch ("/about")
.then((response) => {
    return response.json()
})
.then((json) => {
    aboutApp(json)
})
.catch((error) => {
    console.log(error)
})

function aboutApp(json) {

    const aboutContainer = document.getElementById("about-container")
    aboutContainer.innerHTML = ""

    json.forEach((about) => {
        const aboutName = home.name
        const aboutImage = home.image
        const aboutWhy = about.why
        const aboutColor = about.color

        let aboutDiv = document.createElement("div")
        let aboutNameTag = document.createElement("h1")
        let aboutImg = document.createElement("img")
        let aboutWhyInfo = document.createElement("h3")
        let aboutColorInfo = document.createElement("h3")

        aboutDiv.appendChild(aboutNameTag)
        aboutDiv.appendChild(aboutImg)
        aboutDiv.appendChild(aboutWhyInfo)
        aboutDiv.appendChild(aboutColorInfo)

        aboutDiv.classList.add("about")
        aboutNameTag.classList.add("about-name")
        aboutImg.classList.add("about-image")
        aboutWhyInfo.classList.add("about-why")
        aboutColorInfo.classList.add("about-color")

        aboutNameTag.innerText = aboutName
        aboutImg.src = aboutImage
        aboutWhyInfo.innerText = aboutWhy
        aboutColorInfo.innerText = aboutColor

        aboutContainer.appendChild(aboutDiv)
    })
}