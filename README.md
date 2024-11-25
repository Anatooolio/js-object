# Объекты! Везде объекты!

Объекты же используются для хранения коллекций различных значений и более сложных сущностей. В JavaScript объекты используются очень часто, это одна из основ языка. Поэтому мы должны понять их, прежде чем углубляться куда-либо ещё.

## Release 0
Напиши функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
<br>
Пример работы функции:
```js
isObj({ a: 1, b: 1 })  // true
```

## Release 1
Напиши функцию, которая поверхностно сравнивает два объекта.
<br>
Пример работы функции:
```js
isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }) // true
```

## Release 2
Напиши функцию, которая принимает строку и возвращает объект, состоящий из ключей-букв слова и значений-частоты появления этих букв в строке (без учета регистра).
Обрати внимание - считать нужно не символы, а именно буквы!
<br>
Пример работы функции:
```js
countLetters("Hello world!") // {'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1}
```

## Release 3
* Задача повышенной сложности

Напиши функцию, которая делает глубокое сравнение объектов.
<br>
Пример работы функции: 
```js
deepIsEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) // true
```

## Release 4
** Задача с собеседования

Напиши функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].
<br>
Пример работы функции: 
```js
makePairs({ a: 1, b: 2 }) // [['a', 1], ['b', 2]]
```