async function GetNews() {

    await fetch('https://newsapi.org/v2/everything?q="sports"&apiKey=c344e5ff138541a2915af354552729e1')

        .then(d => d.json())
        .then(response => {

            let limit = response.articles.splice(0, 11)
            console.log(limit)
            for (var i = 0; i <= limit.length - 1; i++) {
                console.log(limit.title)

                let show = document.getElementById("showing");

        try {
        show.innerHTML += `
        <div class="card mt-3">
            <div class="card-body">
            <img src=${response.articles[i].urlToImage} class="images">
            <h2>${response.articles[i].title}</h2>
            <h3>${response.articles[i].author}</h3>
            <p>${response.articles[i].description}</p>
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
GetNews()

