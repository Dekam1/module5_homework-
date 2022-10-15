//ШЕСТОЕ ЗАДАНИЕ
let myArray = ['Hello', 'Hello', 'Hello', 'Hello'];
let from = myArray[0];
let result = true;
myArray.forEach((item) => {
	if (item !== myArray[0]) {
		result = false;
	}
});
console.log(result);
//ШЕСТОЕ ЗАДАНИЕ