console.log("API STARTED");

function getData() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=e7df5bd37c0143a0bc27e3277f5ce294").then(res => res.json()).then(falana => {
        addDataToUI(falana);
    })
}

function addDataToUI(falana) {
    const root = document.getElementById('root');
    const articles = falana.articles;

    for (i = 0; i < articles.length; i++) {
        
        const current_article = articles[i];

        if(current_article.urlToImage == null) {
            continue;
        }

        const heading_h2 = document.createElement('h2');
        heading_h2.class = "h2Class";
        const image = document.createElement("img");
        image.class = "imageClass"
        const content = document.createElement("p");
        content.class = "contentClass"
        const horizontalLine = document.createElement('hr');

        heading_h2.innerText = current_article.title;
        image.src = current_article.urlToImage;
        image.style.width = "400px";
        content.innerText = current_article.content;

        root.appendChild(heading_h2);
        root.appendChild(image);
        root.appendChild(content);
        root.appendChild(horizontalLine);
    }
}

getData();