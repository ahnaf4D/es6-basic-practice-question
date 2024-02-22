const maxArr = (nums1  , num2) => {
    const combined = [...nums1,...num2];
    const maxArrays = Math.max(...combined);
    return maxArrays;
}
const output = maxArr([1,2,5,6],[14,5,1,56]);
console.log(output);