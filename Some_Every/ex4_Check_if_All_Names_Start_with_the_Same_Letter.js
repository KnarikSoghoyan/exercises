function firstLetterIdentity(arrayOfNames) {
    return arrayOfNames.every(name => name[0].toLowerCase() === arrayOfNames[0][0].toLowerCase())
}

console.log(firstLetterIdentity(['Armen', 'Karen', 'Poxos']));
console.log(firstLetterIdentity(['Armen', 'Aaren', 'Aoxos']));
console.log(firstLetterIdentity(['armen', 'aaren', 'Aoxos']));