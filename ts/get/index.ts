function get(obj: object, path: string, defaultValue: any = undefined) {
    const arr = path.split('.');
    for (const key of arr) {
        if (typeof obj === 'object' && obj !== null && key in obj) {
            obj = obj[key];
        } else {
            if (defaultValue !== undefined) {
                return defaultValue;
            } else {
                return undefined;
            }

        }
    }
    return obj;
}

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};

console.log(get(obj, 'a.b'));   // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
console.log(get(obj, 'a.e'));   // 'f'
console.log(get(obj, 'a.x.e')); // undefined
console.log(get(obj, 'a.x.e', true)); // true
console.log(get(obj, 'a.x.e', 'My default value')); // My default value
console.log(obj)
