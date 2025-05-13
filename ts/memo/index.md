### Задание

```ts
/*
  Реализовать функцию memoize, которая принимает в качестве аргумента функцию
  и возвращает мемоизированную функцию-обертку. Эта функция-обертка внутри вызывает
  переданную в memoize функцию, но при этом кэширует результат и при последующих вызовах
  с теми же аргументами возвращает результат из кэша.
  Вторым необязательным аргументом функция memoize принимает таймаут в миллисекундах,
  в течение которого данные хранятся в кэше.
*/

// Пример:
// функция, которая реализует какие-то сложные вычисления
const calculateSometh = () => { /* ...some calculations... */ }
// таймаут - одна секунда
const cacheTimeout = 1000;

const memoizedCalcualteSometh = memoize(calculateSometh, cacheTimeout);

memoizedCalcualteSometh(1); // вызывает внутри calculateSometh(1) и возвращает результат
memoizedCalcualteSometh(1); // не вызывает calculateSometh, а возвращает сохраненное значение из кэша
memoizedCalcualteSometh(2); // вызывает внутри calculateSometh(2), т.к. аргумент изменился
memoizedCalcualteSometh(1); // не вызывает calculateSometh, по-прежнему из кэша от первого вызова
// опять вызывает calculateSometh(1), т.к. с момента предыдущего вызова прошло больше одной секунды
setTimeout(() => memoizedCalcualteSometh(1), 2000) 
```
