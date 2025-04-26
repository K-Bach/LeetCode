# Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
# Note:

# A Sudoku board (partially filled) could be valid but is not necessarily solvable.
# Only the filled cells need to be validated according to the mentioned rules.

def isValidSudoku(board: list[list[str]]):
    rowsSets = [set() for i in range(9)]
    colsSets = [set() for i in range(9)]
    boxsSets = [set() for i in range(9)]
    for r in range(9):
        for c in range(9):
            val = board[r][c]
            if val == ".": continue
            boxIndex = c//3 + (3*(r//3))
            
            if val in rowsSets[r] or val in colsSets[c] or val in boxsSets[boxIndex]:
                return False
            else:
                rowsSets[r].add(val)
                colsSets[c].add(val)
                boxsSets[boxIndex].add(val)
    return True