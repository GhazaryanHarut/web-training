### Задание

Напишите функцию, которая выполняет глубокое сравнение между двумя значениями и определяет — являются ли они эквивалентными. Аргументами могут быть только объекты.

Не используйте `JSON.stringify()`. Из-за особенностей его реализации, этот метод — крайне неэффективен для решения задач глубокого копирования. Например, `JSON.stringify(a) === JSON.stringify(b)` или `JSON.parse(JSON.stringify(obj))`.

```js
function isEqual(a: object, b: object): boolean {
        // Код здесь
}

export default isEqual

const a = {a: 1};
const b = {a: 1};
isEqual(a, b); // true
```
