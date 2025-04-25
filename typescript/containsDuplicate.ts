// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Slow
var containsDuplicate1 = function(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j])
                return true
        }
    }
    return false
};

// Better
var containsDuplicate2 = function(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++){
        if(nums.lastIndexOf(nums[i]) != i)
            return true
    }
    return false
};

// Even better
var containsDuplicate3 = function (nums: number[]): boolean {
    let numbers = new Set()
    for(let i = 0; i < nums.length; i++){
        if(!numbers.has(nums[i]))
            numbers.add(nums[i])
        else
            return true
    }
    return false
};