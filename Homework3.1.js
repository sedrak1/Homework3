function replaceStrArr(str, arr){
	let j = 0;
	for(let i = 0; i < str.length; i++){
		if(str[i] === '_'){
			str = str.replace(str[i] , arr[j]);
			j++
		}
	}
	return str;
}