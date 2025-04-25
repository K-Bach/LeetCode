// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// O(n^2)
function intersect1(nums1: number[], nums2: number[]): number[] {
    let output: number[] = []
    for(let n1 of nums1){
        for(let j = 0; j < nums2.length; j++){
            if(n1 == nums2[j]){
                output.push(n1)
                delete nums2[j]
                break
            }
        }
    }
    return output
};

// Better O(n+m)
function intersect2(nums1: number[], nums2: number[]): number[] {
    let count = {}
    let result: number[] = []

    for (let num of nums1) {
        count[num] = (count[num] || 0) + 1
    }
    for (let num of nums2) {
        if (count[num] > 0) {
            result.push(num)
            count[num] -= 1
        }
    }
    return result
};

// Better in terms of memory (arrays must be sorted) O(n+m)
function intersect3(nums1: number[], nums2: number[]): number[] {
    let i = 0, j = 0
    let result: number[] = []
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            result.push(nums1[i])
            i++
            j++
        }
        else if (nums1[i] > nums2[j]) {
            j++
        }
        else {
            i++
        }
    }
    return result
}