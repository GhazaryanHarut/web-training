
// function hello(fn, cacheTimeout) {
//     const cache = new Map();
//     return function (...args) {
//         const key = JSON.stringify(args);
//         if (cache.has(key)) {
//             console.log('from cache');
//             return cache.get(key);
//         }
//         console.log('from function');
//         const result = fn(...args);
//         cache.set(key, result);
//         setTimeout(() => {
//             cache.delete(key);
//         }, cacheTimeout);
//         return result;
//     }
// }
// function add(a, b) {
//     return a + b;
// }
// const memoizedAdd = hello(add, 1000);
// console.log(memoizedAdd(1, 2)); // from function
// console.log(memoizedAdd(1, 2)); // from cache
// console.log(memoizedAdd(1, 2)); // from cache
// setTimeout(() => {
//     console.log(memoizedAdd(1, 2)); // from function
//     console.log(memoizedAdd(1, 2)); // from cache
// }, 1000);
