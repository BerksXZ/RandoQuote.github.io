const URL = 'https://api.quotable.io/random';
const author = document.getElementById('author');
const tag = document.getElementById('tag');
const quote = document.getElementById('quote');
const btnRefresh = document.getElementById('btnRefresh');
const btnCopy = document.getElementById('btnCopy');

function generate() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(`${data.content} —${data.author}`);

        author.innerHTML = data.author;
        tag.innerHTML = data.tags.map(tags => `<li class="lis-tag"> ${tags}</li>`).join("");
        quote.innerHTML = `"` + `${data.content}` + `"`;
    })
    .catch(error => {
    console.log(error)
})
}

generate();


function copyQuote() {
    navigator.clipboard.writeText(quote.textContent);
};



