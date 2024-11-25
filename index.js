//Проверяем является ли элемент объектом, а не массивом

function isObj(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			return true
		}
	}
	return false
}
// console.log(isObj({ a: 1, b: 1 })) //true
// console.log(isObj([])); //false

//--------------------------------------------------------------------------------------------------------------------------------

function isEqual(obj1, obj2) {
	if (Object.entries(obj1).toString() === Object.entries(obj2).toString()) {
		return true
	}
	return false
}
// console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 })) //true
// console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 })) //false

//--------------------------------------------------------------------------------------------------------------------------------

