# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# Slow
def containsDuplicate1(nums):
    for i in range(0, len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]:
                return True
    return False

# Better
def containsDuplicate2(nums):
    for i in range(0, len(nums)):
        if nums.count(nums[i]) > 1:
            return True
    return False

# Even better
def containsDuplicate3(nums):
    unique = set()
    for i in range(0, len(nums)):
        oldSize = len(unique)
        unique.add(nums[i])
        if oldSize == len(unique):
            return True
    return False