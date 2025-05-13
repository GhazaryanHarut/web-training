type Indexed<T = any> = {
  [key: string]: T;
};

// Вспомогательная функция глубокого слияния
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

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const keys = path.split('.');
  let nested: Indexed = {};
  let current = nested;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      current[key] = {};
      current = current[key];
    }
  }

  merge(object as Indexed, nested);

  return object;
}
