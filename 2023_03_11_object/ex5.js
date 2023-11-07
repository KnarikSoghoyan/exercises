// Given an object or array obj, return a compact object. A compact object is the same as 
// the original object, except with keys containing falsy values removed. 
// This operation applies to the object and any nested objects. Arrays are considered objects 
// where the indices are keys. A value is considered falsy when Boolean(value) returns false.

object1 = [null, 0, false, 1]
object2 = { "a": null, "b": [false, 1], "c": "name" }
object3 = [null, 0, 5, [0], [false, 16]]

function compact(obj) {
    const temp = Object.entries(obj)

    for (const [key, value] of temp) {

        if (Boolean(value) === false) {
            delete obj[key]
        };

        if (Array.isArray(value) === true) {
            value.forEach((e, i) => {
                if (Boolean(e) === false) {
                    delete obj[key][i]
                }
            })
        };
    };
    return obj
};


console.log(compact(object1))
console.log(compact(object2))
console.log(compact(object3))




// Example 1:
// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.

// Example 2:
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

// Example 3:
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.