function removeNegatives(arr){
	var length = arr.length;
	var count = 0;
	for(var i = 0; i < length; i++){
		if(arr[i] < 0){
			count++;
		} else {
			arr[i - count] = arr[i];
		}
	}
	while(count--){
		arr.pop();
	}
	return arr;
}

var result = removeNegatives([0,-1,2,-3,4,-5,6]);
console.log(result);