function productNeighbours(inputArr) {
	let outputArr = [];
	for(let i = 0; i < inputArr.length - 1; i++){
		outputArr[i] = inputArr[i] * inputArr[i+1]
	}
	return outputArr;
}