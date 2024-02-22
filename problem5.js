const arrOperations = (numbers) => {
    let value = 0;
    let sum = 0;
    let average = 0;
    const squaredElements = [];
    for(let i = 0; i < numbers.length; i++){
        const elements = numbers[i];
        value = Math.pow(2,elements);
        squaredElements.push(value);
    }
    // Sum of Squared Element
    for(let squaredElement of squaredElements){
        sum += squaredElement;
        const elementLength = squaredElements.length;
        average = sum / elementLength;
    }
    return Math.round(average);
}
// Output
const input = arrOperations([10,20]);
console.log(input);