# Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

def rotate1(nums, k):
    copy = list(nums)
    for i in range(0, len(copy)):
        nums[(i+k)%len(nums)] = copy[i]

def rotate2(nums, k):
    k = k % len(nums)
    def reverse(start, end):
        while start < end:
            backup = nums[start]
            nums[start] = nums[end]
            nums[end] = backup
            start += 1
            end -= 1
    reverse(0, len(nums) - 1)
    reverse(0, k-1)
    reverse(k, len(nums) - 1)