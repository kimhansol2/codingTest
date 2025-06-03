function solution(brown, yellow) {
    const total = brown + yellow;

    let height = Math.floor(Math.sqrt(total));
    let width = total / height;

    if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
    }

    for (let i = height - 1; i < total; i--) {
        if (total % i !== 0) continue;
        height = i;
        width = total / i;
        if ((width - 2) * (height - 2) === yellow) {
            return [width, height];
        }
    }
}