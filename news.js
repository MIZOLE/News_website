async function GetNews() {

    await fetch('https://newsapi.org/v2/everything?q="sports"&apiKey=ef2320f48834438fb872ab95e0f3d780')

        .then(d => d.json())
        .then(response => {

            let limit = response.articles.splice(0, 11)
            console.log(limit)
            for (var i = 0; i <= limit.length - 1; i++) {
                console.log(limit.title)

                let show = document.getElementById("showing");

                try {
                    show.innerHTML += `
        <div class="card">
        <div class="card-body">
            <h2>${response.articles[i].title}</h2>
            <h3>${response.articles[i].author}</h3>
            <h4>${response.articles[i].description}</h4>
            <H5><button>${response.articles[i].url}</button>
            <h4>

            </div>  
        </div>
        `
                }
                catch (err) {
                    console.log(err)
                }
            }

        })
}
GetNews()

