function strNumCount(arr){
	let strCount = 0;
	let numCount = 0;
	for(let i = 0; i < arr.length; i++){
		if(typeof(arr[i]) === "number"){
			numCount++;
		}
		if(typeof(arr[i]) === "string"){
			strCount++;
		}
	}
	return (`Numbers: ${numCount}, Strings: ${strCount}`)
}