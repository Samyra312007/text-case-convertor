/*
    Split text into words (core operation)
*/

function splitWords(text){
    if(!text || typeof text !== 'string') return [];

    //Handle different input formats
    let words = [];

    //Check if it's camelCase or PascalCase
    if(text.match(/^[a-z]+[A-Z][a-z]+[A-Z][a-z]+[A-Z]/) || (text.match(/[a-z][A-Z]/) && !text.includes(' '))) {
        words = text.split(/(?=[A-Z])/);
        words = words.map(w => w.toLowerCase());
    }

    //Check for snake_case, kebab-case or dot.case
    else if(text.includes('_') || text.includes('-') || text.includes('.')) {
        const separator = text.includes('_') ? '_' : (text.includes('-') ? '-' : '.');
        words = text.split(separator);
    }

    //Simple space-separated or single word
    else{
        words = text.split(/\s+/);
    }

    return words.filter(w => w.length > 0).map(w => w.toLowerCase());
}

/*
    Join words with custom separator and casing
*/

function joinWords(words, separator, transform = 'lower') {
    if(!words || !words.length) return '';

    if(transform === 'upper') {
        words = words.map(w => w.toUpperCase());
    }
    else if(transform === 'capitalize') {
        words = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    }
    else {
        words = words.map(w => w.toLowerCase());
    }

    return words.join(separator);
}

module.exports = { splitWords, joinWords };