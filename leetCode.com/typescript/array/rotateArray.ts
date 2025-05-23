// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


function rotate1(nums: number[], k: number): void {
    let copy = Object.assign([], nums)
    for (let i = 0; i < copy.length; i++){
        nums[(i + k) % nums.length] = copy[i]
    }
};

function rotate2(nums: number[], k: number): void {
    k = k % nums.length
    function reverse(start: number, end: number): void{
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }

    reverse(0, nums.length - 1)
    reverse(0, k - 1)
    reverse(k, nums.length -1)
}