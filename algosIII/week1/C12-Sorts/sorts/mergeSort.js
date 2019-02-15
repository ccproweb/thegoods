function mergeArrays(arr1, arr2) {
    let idx1 = idx2 = 0;
    let res = [];
    while(arr1[idx1] || arr[idx2]) {
        res.push(arr1[idx1] > arr2[idx2] ? arr1[idx1++] : arr2[idx2++]);
    }
    return res;
}

console.log(mergeArrays([1,2,3,4,5],[1,2,3,4,5]));