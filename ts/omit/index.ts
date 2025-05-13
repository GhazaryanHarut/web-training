function omit<T extends object>(obj: T, fields: (keyof T)[]): T {
  for (const field in obj) {
    if (fields.includes(field)) {
      delete obj[field];
    }
  }
  return obj
}
const obj = { name: 'Benjy', age: 18, city: 'Paris' };

console.log(omit(obj, ['age', 'name']));