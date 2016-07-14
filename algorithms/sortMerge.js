function mergeSort(arr){
	var length = arr.length;
	if(length < 2){
		return arr;
	}
	var left = arr.splice(0, length / 2);
	var right = arr.splice(0);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	var output = [];
	while(true) {
		if(left.length == 0){
			return output.concat(right);
		}
		if(right.length == 0){
			return output.concat(left);
		}
		if(left[0] < right[0]){
			output.push(left.shift());
		} else {
			output.push(right.shift());
		}
	}
}

var result = mergeSort([9,8,7,6,5,4,3,2,1]);
console.log(result);