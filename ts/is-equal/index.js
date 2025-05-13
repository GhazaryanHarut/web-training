// function isEqual(a, b) {
//     if (Object.keys(a).length !== Object.keys(b).length) {
//         return false;
//     }
//     if (a === b) {
//         return true;
//     }
//     if (typeof a !== typeof b) {
//         return false;
//     }
//     if (typeof a !== 'object' || a === null || b === null) {
//         return a === b;
//     }
//     for (const key in b) {
//         if (b.hasOwnProperty(key)) {
//             if (!isEqual(a[key], b[key])) {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
//     return true
// }
// console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true ✅
// console.log(isEqual({ a: 1, b: 5 }, { a: 1, b: 3 })); // false ✅
// console.log(isEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3, d: 4 } })); // false ✅
// console.log(isEqual({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } })); // true ✅
// console.log(isEqual([1, 2, 3], [1, 2, 3])); // true ✅
