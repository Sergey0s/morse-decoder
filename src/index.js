const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

let phrase = [];

function decode(expr) {
    phrase.length = 0;
    let dividedArr = [];
    const arr = expr.split('');
    for (let i = 0; i < arr.length / 10; i++) {
        dividedArr.push(arr.slice(i * 10, i * 10 + 10))
    }
    dividedArr.forEach(el => decodeOne(el));
    return phrase.join('')
}

function decodeOne(dividedArr) {
    let arrWithout0 = dividedArr.slice(dividedArr.indexOf('1'));
    let wordArr = [];
    for (let i = 0; i < arrWithout0.length / 2; i++) {
        wordArr.push(arrWithout0.slice(i * 2, i * 2 + 2).join(''))
    }
    for (let item of wordArr) {
        if (item === '10') {
            wordArr[wordArr.indexOf(item)] = '.'
        } else if (item === '11') {
            wordArr[wordArr.indexOf(item)] = '-'
        } else {
            wordArr[wordArr.indexOf(item)] = '*'
        }
    }
    phrase.push(MORSE_TABLE[wordArr.join('')] || ' ')
}

module.exports = {
    decode
};

