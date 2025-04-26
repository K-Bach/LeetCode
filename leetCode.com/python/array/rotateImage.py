# You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

# You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

def rotate(matrix):
    lastIndex = len(matrix)-1
    for c in range(0, len(matrix)//2):
        circleLastIndex = lastIndex-c
        for i in range(0, circleLastIndex-c):
            cornerBackup = matrix[c][c+i]
            print(f"c: {c}\ni: {i}\ncircleLastIndex: {circleLastIndex}\ncornerBackup: {cornerBackup}")
            # Top left corner
            matrix[c][c+i] = matrix[circleLastIndex-i][c]
            # Bottom left corner
            matrix[circleLastIndex-i][c] = matrix[circleLastIndex][circleLastIndex-i]
            # Bottom right corner
            matrix[circleLastIndex][circleLastIndex-i] = matrix[c+i][circleLastIndex]
            # Top right corner
            matrix[c+i][circleLastIndex] = cornerBackup
            for l in matrix:
                    print(l)
            
matrix = [
    [12, 7, 15, 9],
    [3, 20, 8, 14],
    [6, 11, 5, 18],
    [10, 2, 16, 4]
]

rotate(matrix)