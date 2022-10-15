//ПЕРВОЕ ЗАДАНИЕ
let num = +prompt('Введите значение');
if (isNaN(num)) {
	console.log('Упс, кажется, вы ошиблись');
} else {
	if (typeof(num) == 'number' && num % 2 == 0) {
		console.log('Это число четное');
	} else {
		console.log('Это число нечетное');
	}
}
//ПЕРВОЕ ЗАДАНИЕ