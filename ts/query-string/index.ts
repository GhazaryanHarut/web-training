type StringIndexed = Record<string, any>;

const obj: StringIndexed = {
  key: 1,
  key2: 'test',
  key3: false,
  key4: true,
  key5: [1, 2, 3,[2,4]],
  key6: { a: 1 },
  key7: { b: { d: {c:2} }, c: {x: 3} },
};


function queryStringify(data: StringIndexed): string {
  const recursive = (obj: any, parentKey: string = ''): string => {
    let result = '';
    for (const key in obj) {
      const value = obj[key];
      const fullKey = Array.isArray(obj)? `${parentKey}[${key}]`
        : parentKey.length ? `${parentKey}[${key}]`
          : key;
      
      if (typeof value === 'object') {
        result += recursive(value, fullKey);
      } else {
        result += `${fullKey}=${value}&`;
      }
    }

    return result;
  };

  const query = recursive(data);
  return query
}


console.log(queryStringify(obj)); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'