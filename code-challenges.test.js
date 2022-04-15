// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeAndShuffle", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("takes in an array, removes the first item and shuffles the remaining items", () => {
        expect(removeAndShuffle(colors1)).toEqual(expect.arrayContaining(colors1))
        expect(removeAndShuffle(colors2)).toEqual(expect.arrayContaining(colors2))
    })
})

// ---Error Message---

// ReferenceError: removeAndShuffle is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Create a function called removeAndShuffle and give it a parameter of array
// Within the function, use .shift() to remove the first item in the array
// After removing first item, return the array sorted in a random order
// Call the function, pass in the arguments

const removeAndShuffle = (array) => {
    array.shift()
    return array.sort((a, b) => 0.6 - Math.random())
}

removeAndShuffle(colors1)
removeAndShuffle(colors2)

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minAndMax", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
    it("takes in an array of numbers and returns array of only min and max numbers", () => {
        expect(minAndMax(nums1)).toEqual([-8, 90])
        expect(minAndMax(nums2)).toEqual([5, 109])
    })
})

// ---Error Message---

// ReferenceError: minAndMax is not defined

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// b) Create the function that makes the test pass.

// Create a function called minAndMax and give it a parameter of array
// Within the function, create an empty array
// Push min and max numbers into empty array using .push
// Return new array
// Call the function, pass in the arguments

const minAndMax = (array) => {
    newArray = []
    newArray.push(Math.min(...array))
    newArray.push(Math.max(...array))
    return newArray
}

minAndMax(nums1)
minAndMax(nums2)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDupes", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    it("takes in two arrays and returns a new one with no duplicate values", () => {
        expect(noDupes(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// ---Error Message---

// ReferenceError: noDupes is not defined

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// b) Create the function that makes the test pass.

// Create a function called noDupes and give it parameters of array1 and array2
// Within the function return a new array using Set which will eliminate duplicates in the new array, use spread operator concatenation inside of the set parentheses
// Call the function, pass in the arguments

const noDupes = (array1, array2) => {
    return [...new Set([...array1,...array2])]
}

noDupes(testArray1, testArray2)