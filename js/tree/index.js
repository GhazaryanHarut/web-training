export default function tree(height) {
    let result = [];
    if (Number(height) < 3) {
        return null;
    }
    height = Number(height)-1;
    const bottom = '|';;
    const width = height * 2 - 1;
    for (let i = 0; i < height; i++) {
        const starsCount = i * 2 + 1;
        const spacesCount = (width - starsCount) / 2;
        const spaces = ' '.repeat(spacesCount);
        const stars = '*'.repeat(starsCount);
        result.push(spaces + stars + spaces);
    }
    result.push(' '.repeat((width - 1) / 2) + bottom+' '.repeat((width - 1) / 2 )+'\n');
    return result.join('\n');
}