// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < n; i++){
        nums1[m + i] = nums2[i]
        let count = 0
        while ((nums1[m + i - count] < nums1[m + i - count - 1]) && (m + i - count - 1) > -1) {
            const backup = nums1[m + i - count]
            nums1[m + i - count] = nums1[m + i - count - 1]
            nums1[m + i - count - 1] = backup
            count++
        }
    }
};

// Better
function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        }
        else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    while (j >= 0) {
        nums1[k] = nums2[j]
        j--
        k--
    }
}