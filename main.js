const url = "https://newsapi.org/v2/everything?";
const apiKey = "f640f1ff0a114321b25177eb7a462a99";

window.addEventListener('load',()=>{
    fetchNews("India");
})


async function fetchNews(query) {
    const res = await fetch(`${url}q=${query}&apiKey=${apiKey}`);
    const data = await res.json();
    // console.log(data.articles)
    bindData(data.articles)

};

function bindData(articles) {
    const mainBodyNews = document.getElementById('main-id-news');
    const templateIdCard = document.getElementById('template-id-card');

    mainBodyNews.innerText ="";
    articles.forEach((article)=> {
        if (!article.urlToImage) return
       const cardClone = templateIdCard.content.cloneNode(true);
       fillINNewsData(cardClone,article) 
       mainBodyNews.appendChild(cardClone)

    })
}

function fillINNewsData(cardClone,article) {
    const newsImg = cardClone.querySelector('img');
    const newstitle = cardClone.querySelector('h3');
    const newsDesc = cardClone.querySelector('p');
    const newsSource = cardClone.querySelector('a');

    newsImg.src=article.urlToImage;
    newstitle.innerText=article.title;
    newsDesc.innerText=article.description;
    newsSource.href=article.url;

}

const searchInput = document.querySelector('#search-input');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click',()=> {
    const query = searchInput.value ;
    fetchNews(query)
})

