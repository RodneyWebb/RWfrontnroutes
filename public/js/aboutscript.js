fetch ("/aboutinfo")
.then((response) => {
    console.log("first")
    console.log(response.body)
    return response.json()
})
.then((json) => {
    console.log("before")
    aboutApp(json)
    console.log("after")
})
.catch((error) => {
    console.log(error)
})

function aboutApp(json) {

    const aboutContainer = document.getElementById("about-container")
    aboutContainer.innerHTML = ""

    json.forEach((about) => {
        const aboutName = about.name
        const aboutWhy = about.why
        const aboutColor = about.color
        const aboutImage = about.image

        let aboutDiv = document.createElement("div")
        let aboutNameTag = document.createElement("h1")
        let aboutWhyInfo = document.createElement("h3")
        let aboutColorInfo = document.createElement("h3")
        let aboutImg = document.createElement("img")

        aboutDiv.appendChild(aboutNameTag)
        aboutDiv.appendChild(aboutWhyInfo)
        aboutDiv.appendChild(aboutColorInfo)
        aboutDiv.appendChild(aboutImg)

        aboutDiv.classList.add("about")
        aboutNameTag.classList.add("about-name")
        aboutWhyInfo.classList.add("about-why")
        aboutColorInfo.classList.add("about-color")
        aboutImg.classList.add("about-image")

        aboutNameTag.innerText = aboutName
        aboutWhyInfo.innerText = aboutWhy
        aboutColorInfo.innerText = aboutColor
        aboutImg.src = aboutImage

        aboutContainer.appendChild(aboutDiv)
    })
}

aboutApp()