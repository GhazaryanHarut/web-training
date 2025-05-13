
function intersection(user1, user2) {
    const result = []
    const [first, second] = user1.length > user2.length ? [user1, user2] : [user2, user1];
    first.forEach(element => {
        let start = element[0];
        let end = element[1];
        const range = [];
        second.forEach(element => {
            const start2 = element[0];
            const end2 = element[1];
            if (start < end2 && start2 < end) {
                range[0] = Math.max(start, start2);;
                range[1] = Math.min(end, end2);;
                start = Math.max(start, start2);
                end = Math.min(end, end2);
            }
        });
        if (range.length) {
            result.push(range);
        }
    });
    return result;
} 
console.log(intersection(
    [[8, 12], [17, 22]],
    [[5, 11], [14, 18], [20, 23]]
)); // [[8, 11], [17, 18], [20, 22]]

console.log(intersection(
    [[9, 15], [18, 21]],
    [[10, 12], [14, 16], [20, 23], [21, 22]]
)); // [ [ 10, 12 ], [ 14, 15 ], [ 20, 21 ] ]
console.log(intersection(
    [[1, 2], [3, 4], [5, 6]],
    [[7, 8], [9, 10], [11, 12]]
)); // []
console.log(intersection(
    [[1, 2], [3, 4], [5, 6]],
    [[1, 2], [3, 4], [5, 6]]
)); // [[1, 2], [3, 4], [5, 6]]

