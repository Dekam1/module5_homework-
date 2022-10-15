//СЕДЬМОЕ ЗАДАНИЕ
let numbers = [10, 10, 0,  5, 3, null, 0];

let even = 0;
let odd = 0;
let zero = 0;
let nulls = 0;

numbers.forEach((item) => {
	if (typeof(item) == 'object') {
		nulls++;
	} else if (item % 2 == 0 && item !== 0) {
		even++;
	} else if (item == 0) {
		zero++;
	} else {
		odd++;
	}
});
console.log(`Количество четных: ${even}`);
console.log(`Количество нечетных: ${odd}`);
console.log(`Количество null: ${nulls}`);
console.log(`Количество нулей: ${zero}`);
//СЕДЬМОЕ ЗАДАНИЕ