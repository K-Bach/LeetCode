# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

def moveZeroes1(nums: list):
    insertPos = -1
    for i in range(0, len(nums)):
        if nums[i] == 0:
            if insertPos == -1:
                insertPos = i
        elif insertPos != -1:
            nums[insertPos] = nums[i]
            nums[i] = 0
            insertPos += 1

# or
def moveZeroes2(nums: list):
    insertPos = 0
    for i in range(0, len(nums)):
        if(nums[i] != 0):
            nums[insertPos] = nums[i]
            insertPos += 1
    for i in range(insertPos, len(nums)):
        nums[i] = 0