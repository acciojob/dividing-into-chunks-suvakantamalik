const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let currentSubArray = [];
	let currentSum = 0;
	let result = [];
	for(let item of arr){
		if(currentSum+item <= n){
			currentSubArray.push(item);
			currentSum += item;
		}
		else{
			result.push(currentSubArray);
			currentSubArray = [item];
			currentSum = item;
		}

		
	}
	if(currentSubArray.length > 0){
			result.push(currentSubArray);
		}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
