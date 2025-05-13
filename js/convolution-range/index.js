function compress(list) {
    const sortedList = list.sort((a, b) => a - b);
    const range = [];
    const result = [];
    sortedList.forEach((item, index) => {
        if (index === 0 || item === sortedList[index - 1] + 1) {
            range.push(item);
        } else {
            range.length === 1 ? result.push(String(range.at(0))) : result.push(range.at(0) + "-" + range.at(-1));
            range.length = 0;
            range.push(String(item));
        }
        if (index === sortedList.length - 1) {
            range.length === 1 ? result.push(String(range.at(0))) : result.push(range.at(0) + "-" + range.at(-1));
            return result;
        }
    });
    return result;
}
console.log(compress([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // '1-10';
console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])) // '0-5,8-9,11'
console.log(compress([1, 4, 3, 2])) // '1-4'
console.log(compress([1, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])) // '1,4,6-15'
