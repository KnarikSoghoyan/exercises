const names = ['Armen', 'Karen', 'Poxos'];

function checkLetterAvailibility(letter) {
    return names.some(name => name.toLowerCase().includes(letter.trim()));
}

console.log(checkLetterAvailibility('n'));
console.log(checkLetterAvailibility('n   '));
console.log(checkLetterAvailibility('p'));
