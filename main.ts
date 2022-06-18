let matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
let sum = (arr: number[][]): number => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
            if (arr[i][j] == 0 && i < arr.length - 1) {
                sum -= arr[i + 1][j];
            }
        }
    }
    return sum;
}
console.log(sum(matrix));
