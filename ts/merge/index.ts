type Indexed<T = any> = {
    [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
    for (const key in rhs) {
        if (
            typeof rhs[key] === 'object'
        ) {
            if (typeof lhs[key] !== 'object') {
                lhs[key] = {};
            }
            merge(lhs[key], rhs[key]);
        } else {
            lhs[key] = rhs[key];
        }
    }
    return lhs;
}


console.log(merge({ a: { b: { a: 2 } }, d: 5 }, { a: { b: { c: 1 } } }))
console.log(merge({ a: 2, d: 5 }, { a: { b: { c: 1 } }, d: { k: { s: 3, d: 4 } } }))