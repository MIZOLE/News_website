function searchBar(query) {
    searchUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=c344e5ff138541a2915af354552729e1`
    
    fetch(searchUrl)
        .then(res => res.json())
        .then((jsondata) => {
            console.log(jsondata)
        })
    window.onload = () => {
        let searchFieldElement = document.getElementById("searching");
        searchFieldElement.onkeyup = (event) => {
            searchBar(searchFieldElement.value)
        }
    }
}
searchBar()


async function GetSports() {

    await fetch('https://newsapi.org/v2/everything?q="sports"&apiKey=c344e5ff138541a2915af354552729e1')

        .then(d => d.json())
        .then(response => {

            let limit = response.articles.splice(0, 15)
            // console.log(limit)
            for (var i = 0; i <= limit.length - 1; i++) {
                // console.log(limit.title)

                let show = document.getElementById("showing");

                try {
                    show.innerHTML += `

        
            <div class="card mt-3">
            <div class="card-body">
            <img src=${response.articles[i].urlToImage} class="images">
            <h2>${response.articles[i].title}</h2>
            <h3>${response.articles[i].author}</h3>
            <p>${response.articles[i].description}</p>
            <p>${response.articles[i].publishedAt}</p>
            <a href=${response.articles[i].url}>Read more</a>            
            </div>
        </div>
        `
                }
                catch (err) {
                    // console.log(err)
                }
            }

        })
}
GetSports()

async function GetTech() {

    await fetch('https://newsapi.org/v2/everything?q="tech"&apiKey=c344e5ff138541a2915af354552729e1')

        .then(d => d.json())
        .then(response => {

            let limit1 = response.articles.splice(0, 15)
            // console.log(limit1)
            for (var i = 0; i <= limit1.length - 1; i++) {
                // console.log(limit1.title)

                let show = document.getElementById("showing1");

                try {
                    show.innerHTML += `
                    <div class="card">
                    <div class="card-body">
                    <img src=${response.articles[i].urlToImage} class="images">
                    <h2>${response.articles[i].title}</h2>
                    <h3>${response.articles[i].author}</h3>
                    <p>${response.articles[i].description}</p>
                    <p>${response.articles[i].publishedAt}</p>
                    <a href=${response.articles[i].url}>Read more</a>   
                    </div>
                </div>
                    `
                }
                catch (err) {
                    // console.log(err)
                }
            }

        })
}
GetTech()

async function GetBusiNews() {

    await fetch('https://newsapi.org/v2/everything?q="Business"&apiKey=c344e5ff138541a2915af354552729e1')

        .then(d => d.json())
        .then(response => {

            let limit2 = response.articles.splice(0, 15)
            // console.log(limit2)
            for (var i = 0; i <= limit2.length - 1; i++) {
                // console.log(limit2.title)

                let show = document.getElementById("showing3");

                try {
                    show.innerHTML += `

        <div class="card">
            <div class="card-body">
            <img src=${response.articles[i].urlToImage} class="images">
            <h2>${response.articles[i].title}</h2>
            <h3>${response.articles[i].author}</h3>
            <p>${response.articles[i].description}</p>
            <p>${response.articles[i].publishedAt}</p>
            <a href=${response.articles[i].url}>Read more</a>   
            </div>
        </div>
        `
                }
                catch (err) {
                    // console.log(err)
                }
            }

        })
}
GetBusiNews()
