async function GetSports() {

    await fetch('https://newsapi.org/v2/everything?q="sport"&apiKey=ef2320f48834438fb872ab95e0f3d780')

        .then(d => d.json())
        .then(response => {

            let limit = response.articles.splice(0, 20)
            console.log(limit)
            for (var i = 0; i <= limit.length - 1; i++) {
                console.log(limit.title)

                let show = document.getElementById("showing");

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
        catch(err){
            console.log(err)
        }
    }

        })
}
GetSports()

async function GetTech() {

    await fetch('https://newsapi.org/v2/everything?q="tech"&apiKey=ef2320f48834438fb872ab95e0f3d780')

        .then(d => d.json())
        .then(response => {

            let limit1 = response.articles.splice(0, 15)
            console.log(limit1)
            for (var i = 0; i <= limit1.length - 1; i++) {
                console.log(limit1.title)

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
        catch(err){
            console.log(err)
        }
    }

        })
}
GetTech ()

async function GetBusiNews() {

    await fetch('https://newsapi.org/v2/everything?q="Businesses"&apiKey=ef2320f48834438fb872ab95e0f3d780')

        .then(d => d.json())
        .then(response => {

            let limit2 = response.articles.splice(0, 20)
            console.log(limit2)
            for (var i = 0; i <= limit2.length - 1; i++) {
                console.log(limit2.title)

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
        catch(err){
            console.log(err)
        }
    }

        })
}
GetBusiNews()
