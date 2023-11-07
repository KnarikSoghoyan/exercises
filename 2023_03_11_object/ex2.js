// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

const languages = {
    armenian: "native",
    russian: "excelent",
    english: "intermediate"
};

function opposite() {
    const temporary = []
    for (const [key, value] of Object.entries(languages)) {
        temporary.push([value, key])
    }
    return temporary
};

console.log(opposite(languages))
