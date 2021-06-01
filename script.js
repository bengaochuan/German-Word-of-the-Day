const wordContainer = document.getElementById('word-container');
const germanWord = document.getElementById('german-word');
const englishTranslation = document.querySelector('#english-translation span');
const translationLink = document.getElementById('english-translation');
const twitterBtn = document.getElementById('twitter-btn');
const newWordBtn = document.getElementById('new-word-btn');
const loader = document.getElementById('loader');


function showLoading() {
    loader.hidden = false;
    wordContainer.hidden = true;
}


function hideLoading() {
    wordContainer.hidden = false;
    loader.hidden=true;
}


function newWord() {
    showLoading();
    const pickARandomWord = dict[Math.floor(Math.random() * dict.length)] //return an Aarry with one random word
    const word = Object.keys(pickARandomWord).toString(); //The German Word;
    const translation = Object.values(pickARandomWord).toString(); //The English tranlsation
    germanWord.textContent = word;
    englishTranslation.textContent = translation;
    translationLink.href = `https://en.pons.com/translate/german-english/${germanWord.textContent}`; //Update the link
    hideLoading();
}



// Tweet Word
function tweetWord() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${germanWord.textContent}: ${englishTranslation.textContent}&hashtags=German,GermanWord,wortdestages`;
    window.open(twitterUrl, '_blank');
}

newWordBtn.addEventListener('click', newWord);
twitterBtn.addEventListener('click', tweetWord);

newWord();
