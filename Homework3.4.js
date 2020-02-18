function maxMinSum(arr){
	min = Infinity;
	max = -Infinity;
	for(let i = 0; i < arr.length; i++){
		if(min > arr[i].length){
			min = arr[i].length;
		} 
		if(max < arr[i].length){
			max = arr[i].length;
		}
	}
	return max + min;
}