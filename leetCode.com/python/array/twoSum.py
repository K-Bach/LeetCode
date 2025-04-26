# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

def twoSum1(nums: list, target: int):
    output = [0, 0]
    for i in range(0, len(nums)):
        output[0] = i
        for j in range(0, len(nums)):
            if i != j and nums[i] + nums[j] == target:
                output[1] = j
                break
        if output[1]:
            break
    return output

# Better
def twoSum2(nums: list, target: int):
    output = {}
    for i in range(0, len(nums)):
        complement = target - nums[i]
        if complement in output:
            return [output[complement], i]
        else:
            output[nums[i]] = i
