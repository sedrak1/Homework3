function numSort(arr){
	let resArr = [];
	for(let i = 0; i < arr.length; i++){
		if(typeof(arr[i]) === 'number' && arr[i] % 2 === 0){
			resArr.push(arr[i])
		}
	}
	for(let i = 0; i < arr.length; i++){
		if(typeof(arr[i]) === 'number' && arr[i] % 2 === 1){
			resArr.push(arr[i])
		}
	}
	return resArr;
}