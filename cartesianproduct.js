cartesianProduct = (arr1, arr2) => {
    let finalArray = [];
    for(let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
    finalArray.push([arr1[i], arr2[j]]);
        }
    }
    return finalArray;

}

const arr1 = [2, 4];
const arr2 = [5, 6, 3]
console.log(cartesianProduct(arr1, arr2));