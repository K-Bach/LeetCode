// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums: number[]): number {
    let unique = new Set()
    nums.forEach(n => {
        if(unique.has(n))
            unique.delete(n)
        else
            unique.add(n)
    })
    return unique.values().next().value
};