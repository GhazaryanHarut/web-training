const obj =namespace('a.b.c.d.e')
console.log(obj); // {"a":{"b":{"c":{"d":{"e":{}}}}}}
console.log(obj.a.b.c); // { d: { e: {} } }
function namespace(str) {
    const parts = str.split('.');
    console.log(parts);
    let result = {};
    const recursive = (obj, parts) => {
        console.log(obj, parts);
        if (parts.length === 0) return obj;
        const part = parts.shift();
        obj[part] = {};
        recursive(obj[part], parts);
    };
    recursive(result, parts);
    return result;
}