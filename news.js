async function GetNews() {

    await fetch('https://newsapi.org/v2/everything?q="Music"&apiKey=ef2320f48834438fb872ab95e0f3d780')

        .then(d => d.json())
        .then(response => {

            let first_limit = response.articles.splice(0, 11)
            console.log(first_limit)
            for (var i = 0; i <= first_limit.length - 1; i++) {
                console.log(first_limit.title)

                let show = document.getElementById("showing");

                try {
                    show.innerHTML += `

        <div class="card">
        try {
        show.innerHTML += `
        <div class="card mt-2">
            <div class="card-body">
            <img src=${response.articles[i].urlToImage} class="images">
            <h2>${response.articles[i].title}</h2>
            <h3>${response.articles[i].author}</h3>
            <p>${response.articles[i].description}</p>
            <p>${response.articles[i].publishedAt}</p>  
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

//Function to get Entertainment news from the api

// async function GetEntNews() {

//     await fetch('https://newsapi.org/v2/everything?q="entertainment"&apiKey=ef2320f48834438fb872ab95e0f3d780')

//         .then(d => d.json())
//         .then(response => {

//             let second_limit = response.articles.splice(0, 11)
//             console.log(second_limit)
//             for (var i = 0; i <= second_limit.length - 1; i++) {
//                 console.log(second_limit.title)

//                 let show = document.getElementById("showing2");

//                 try {
//                     show.innerHTML += `

//         <div class="card">
//             <div class="card-body">
//             <h2>${response.articles[i].title}</h2>
//             <h3>${response.articles[i].author}</h3>
//             <p>${response.articles[i].description}</p>
//             </div>
//         </div>
//         `
//         }
//         catch(err){
//             console.log(err)
//         }
//     }

//         })
// }
// GetEntNews()

//Function to get tech news from the api

// async function GetEntNews() {

//     await fetch('https://newsapi.org/v2/everything?q="entertainment"&apiKey=ef2320f48834438fb872ab95e0f3d780')

//         .then(d => d.json())
//         .then(response => {

//             let third_limit = response.articles.splice(0, 11)
//             console.log(third_limit)
//             for (var i = 0; i <= third_limit.length - 1; i++) {
//                 console.log(third_limit.title)

//                 let show = document.getElementById("showing3");

//                 try {
//                     show.innerHTML += `

//         <div class="card">
//             <div class="card-body">
//             <h2>${response.articles[i].title}</h2>
//             <h3>${response.articles[i].author}</h3>
//             <p>${response.articles[i].description}</p>
//             </div>
//         </div>
//         `
//         }
//         catch(err){
//             console.log(err)
//         }
//     }

//         })
// }
// GetEntNews()
