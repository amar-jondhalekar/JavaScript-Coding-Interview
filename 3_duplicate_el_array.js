// How to find duplicate elements in a given array?

const mainArray = [1, 2, 23, 44, 1, 2, 4, 43, 34, 11, 3, 43];
const duplicatedArray = mainArray.filter((ele, index, arr) => {
    return arr.indexOf(ele) !== index
});

const uniqueDuplicatedArray = [...new Set(duplicatedArray)];
console.log(`Duplicated Array : `, uniqueDuplicatedArray);