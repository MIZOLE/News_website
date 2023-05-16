// function searchBar(query) {
//     searchUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=acf13d67f2334b1485d1ae2961fe1f92`
    
//     fetch(searchUrl)
//         .then(res => res.json())
//         .then((jsondata) => {
//             console.log(jsondata)
//         })
//     window.onload = () => {
//         let searchFieldElement = document.getElementById("searching");
//         searchFieldElement.onkeyup = (event) => {
//             searchBar(searchFieldElement.value)
//         }
//     }
// }
// searchBar()

// let date = new Date().toJSON().slice(0, 10);
// console.log(date)

// document.getElementById("date").innerHTML = date


function GetGeneral() {

    fetch('https://newsapi.org/v2/everything?q="general"&apiKey=57d0e96d029f4224a5dee612b4b6fef1')

    .then(d => d.json())
    .then(response => {
        console.log(response)
        let limit = response.articles.slice(0, 20)
        // console.log(limit)
        for (var i = 0; i <= limit.length - 1; i++) {
            // console.log(limit.title)

            let show = document.getElementById("showing5");

            try {
                show.innerHTML += `

        <div class="card mt-3">
        <div class="card-body">
        <img src=${response.articles[i].urlToImage} class="images">
        <h2>${response.articles[i].title}</h2>
        <h3>${response.articles[i].author}</h3>
        <p>${response.articles[i].description}</p>
        <p>${response.articles[i].publishedAt}</p>
        
        <h6>If you want to read more, visit the following link
        <a id="link" href=${response.articles[i].url}>READ MORE</a> </h6>         
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
GetGeneral()





function GetHealth() {

        fetch('https://newsapi.org/v2/everything?q="health"&apiKey=57d0e96d029f4224a5dee612b4b6fef1')

        .then(d => d.json())
        .then(response => {
            console.log(response)
            let limit = response.articles.slice(0, 20)
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
            <h6>If you want to read more, visit the following link
            <a id="link" href=${response.articles[i].url}>READ MORE</a> </h6>            </div>
        </div>
        `
                }
                catch (err) {
                    // console.log(err)
                }
            }

        })
}
GetHealth()

function GetTech() {

 fetch('https://newsapi.org/v2/everything?q="tech"&apiKey=57d0e96d029f4224a5dee612b4b6fef1')

        .then(d => d.json())
        .then(response => {

            let limit1 = response.articles.slice(0, 15)
            console.log(limit1)
            console.log(response)

            // console.log(limit1)
            for (var i = 0; i <= limit1.length - 1; i++) {
                // console.log(limit1.title)

                let show = document.getElementById("showing1");

                try {
                    show.innerHTML += `
                    <div class="card mt-3">
                    <div class="card-body">
                    <img src=${response.articles[i].urlToImage} class="images">
                    <h2>${response.articles[i].title}</h2>
                    <h3>${response.articles[i].author}</h3>
                    <p>${response.articles[i].description}</p>
                    <p>${response.articles[i].publishedAt}</p>
                    <h6>If you want to read more, visit the following link
                    <a id="link" href=${response.articles[i].url}>READ MORE</a> </h6>                    </div>
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

function GetBusiNews() {

    fetch('https://newsapi.org/v2/everything?q="business"&apiKey=57d0e96d029f4224a5dee612b4b6fef1')

        .then(d => d.json())
        .then(response => {
            console.log(response)
            let limit2 = response.articles.slice(0, 20)
            // console.log(limit2)
            for (var i = 0; i <= limit2.length - 1; i++) {
                // console.log(limit2.title)

                let show = document.getElementById("showing3");

                try {
                    show.innerHTML += `

        <div class="card mt-3">
            <div class="card-body">
            

            <img src=${response.articles[i].urlToImage} class="images">
            <h2>${response.articles[i].title}</h2>
            <h3>${response.articles[i].author}</h3>
            <p>${response.articles[i].description}</p>
            <p>${response.articles[i].publishedAt}</p>
            <h6>If you want to read more, visit the following link
            <a id="link" href=${response.articles[i].url}>READ MORE</a> </h6>
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


function GetEntertainment() {

    fetch('https://newsapi.org/v2/everything?q="entertainment"&apiKey=57d0e96d029f4224a5dee612b4b6fef1')

    .then(d => d.json())
    .then(response => {
        console.log(response)
        let limit = response.articles.slice(0, 20)
        // console.log(limit)
        for (var i = 0; i <= limit.length - 1; i++) {
            // console.log(limit.title)

            let show = document.getElementById("showing4");

            try {
                show.innerHTML += `

        <div class="card mt-3">
        <div class="card-body">
        <img src=${response.articles[i].urlToImage} class="images">
        <h2>${response.articles[i].title}</h2>
        <h3>${response.articles[i].author}</h3>
        <p>${response.articles[i].description}</p>
        <p>${response.articles[i].publishedAt}</p>
        <h6>If you want to read more, visit the following link
        <a id="link" href=${response.articles[i].url}>READ MORE</a> </h6>
        </div>
    </div>
    `
            }
            catch (err) {
                // console.log(err)
            }

        }
        let mybutton = document.getElementById("myBtn");
        window.onscroll = function() {scrollFunction()};

        function scrollFunction(){
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // function topfunction() {
        //     document.body.scrollTop = 0;
        //     document.documentElement.scrollTop = 0;
        // }

        mybutton.addEventListener("click", () =>{
            window.scrollTo({
                top: 0,
                behaviour: "smooth"
            })
        })

    })
}
GetEntertainment()
