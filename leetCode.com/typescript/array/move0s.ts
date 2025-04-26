// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeroes1(nums: number[]): void{
    let insertPos = -1
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 0) {
            if(insertPos == -1)
                insertPos = i
        }
        else {
            if (insertPos != -1) {
                nums[insertPos] = nums[i]
                nums[i] = 0
                insertPos += 1
            }
        }
    }
}

// or
function moveZeroes2(nums: number[]): void{
    let insertPos = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i]
            insertPos++
        }
    }
    for (let i = insertPos; i < nums.length; i++){
        nums[i] = 0
    }
}