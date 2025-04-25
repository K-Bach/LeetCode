# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.

def singleNumber(self, nums):
    unique = set()
    for i in range(0, len(nums)):
        if nums[i] not in unique:
            unique.add(nums[i])
        else:
            unique.discard(nums[i])
    return unique.pop()