// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

function rotate(matrix: number[][]): void{
    const lastIndex = matrix.length - 1
    console.log("lastIndex: " + lastIndex)
    for (let c = 0; c < Math.floor(matrix.length / 2); c++){
        const circleLastIndex = lastIndex - c
        console.log("circleLastIndex: " + circleLastIndex)
        for (let i = 0; i < circleLastIndex - c; i++){
            const backup = matrix[c][c + i]
            console.log("backup: " + backup)
            console.log("c: " + c + "\n" + "i: " + i)
            // Top left corner
            matrix[c][c + i] = matrix[circleLastIndex - i][c]
            // Bottom left corner
            matrix[circleLastIndex - i][c] = matrix[circleLastIndex][circleLastIndex - i]
            // Bottom right corner
            matrix[circleLastIndex][circleLastIndex - i] = matrix[c + i][circleLastIndex]
            // Top right corner
            matrix[c + i][circleLastIndex] = backup
            for (let l of matrix) {
                console.log(l)
            }
        }
    }
}

let matrix = [
    [12, 7, 15, 9],
    [3, 20, 8, 14],
    [6, 11, 5, 18],
    [10, 2, 16, 4]
]

rotate(matrix)