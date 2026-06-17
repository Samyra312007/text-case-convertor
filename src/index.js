const { splitWords, joinWords } = require('./cases');

/*
    Convert text between different case styles
    @param {string} text - The text to convert
    @param {string} targetCase - Target case: 'camel', 'pascal', 'snake', 'kebab', 'constant', 'dot', 'lower', 'upper', 'capital'
    @returns {string} - Converted text
*/

function convertCase(text, targetCase) {
    if(!text || typeof text !== 'string') {
        throw new Error('Text must be a non-empty string');
    }

    const words = splitWords(text);

    if(words.length === 0){
        return '';
    }

    switch (targetCase) {
        case 'camel':
            //camelCase: first word lowercase, rest capitalized
            return words[0].toLowerCase() + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');

        case 'pascal':
            //PascalCase: all words capitalized and joined
            return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');

        case 'snake':
            return joinWords(words, '_', 'lower');

        case 'kebab': 
            return joinWords(words, '-', 'lower');


        case 'constant':
            return joinWords(words, '_', 'upper');

        case 'dot':
            return joinWords(words, '.', 'lower');

        case 'lower':
            return joinWords(words, ' ', 'lower');

        case 'upper':
            return joinWords(words, ' ', 'upper');

        case 'capital':
            return joinWords(words, ' ', 'capitalize');

        default: 
            throw new Error(`Unsupported target case: ${targetCase}. Supported cases: camel, pascal, kebab, constant, dot, lower, upper, capital`);
    }
}

/*
    Detect the case style of input text
    @param {string} text - The text to analyze
    @returns {string} - Detected case or 'unknown'
*/

function detectCase(text) {
    if(!text || typeof text !== 'string') return 'unknown';

    if(text.includes('_') && text === text.toUpperCase()) return 'constant';
    if(text.includes('_') && text !== text.toUpperCase()) return 'snake';
    if(text.includes('-')) return 'kebab';
    if(text.includes('.')) return 'dot';
    if(text.includes(' ') && text === text.toLowerCase()) return 'lower';
    if(text.includes(' ') && text === text.toUpperCase()) return 'upper';
    if(text.includes(' ') && text[0] === text[0].toUpperCase()) return 'capital';
    if(text[0] === text[0].toLowerCase() && /[A-Z]/.test(text)) return 'camel';
    if(text[0] === text[0].toUpperCase() && /[A-Z]/.test(text)) return 'pascal';

    return 'unknown';
}


module.exports = {
    convertCase,
    detectCase,
    splitWords,
    joinWords
}