// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum1(nums: number[], target: number): number[]{
    let output = [0, 0]
    for (let i = 0; i < nums.length; i++){
        output[0] = i
        for (let j = 0; j < nums.length; j++){
            if (i != j && nums[i] + nums[j] == target) {
                output[1] = j
                break
            }
        }
        if (output[1])
            break
    }
    return output
}

// Better
function twoSum2(nums: number[], target: number): number[]{
    let map = new Map()
    let output: number[] = []
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if (map.has(complement)) {
            output = [i, map.get(complement)]
            break
        }
        map.set(nums[i], i)
    }
    return output
}