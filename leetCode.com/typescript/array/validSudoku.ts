// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board: string[][]): boolean {
    const rowsSets = new Array(9).fill(0).map(() => new Set());
    const colsSets = new Array(9).fill(0).map(() => new Set());
    const boxesSets = new Array(9).fill(0).map(() => new Set());

    for (let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++){
            let num = board[r][c]
            if (num == ".") continue

            let boxIndex = Math.floor(c/3) + (3*(Math.floor(r/3)))
            if (colsSets[c].has(num) || rowsSets[r].has(num) || boxesSets[boxIndex].has(num))
                return false

            colsSets[c].add(num)
            rowsSets[r].add(num)
            boxesSets[boxIndex].add(num)
        }
    }
    
    return true
};