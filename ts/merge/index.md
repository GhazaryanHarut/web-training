### Задание

Напишите функцию, которая объединит два объекта с сохранением их уникальных ключей.

```tsx
type Indexed<T = any> = {
    [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
        // Код здесь
}

merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}});
/*
{
    a: {
        b: {
            a: 2,
            c: 1,
        }
    },
    d: 5,
}
*/
```
