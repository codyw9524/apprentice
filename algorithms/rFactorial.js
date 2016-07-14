function rFactorial(num){
	if(num === 1){
		return 1;
	} else {
		return rFactorial(num - 1) * num;
	}
}

console.log(rFactorial(5));