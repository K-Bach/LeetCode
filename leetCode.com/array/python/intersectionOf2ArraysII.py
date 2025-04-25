# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

# O(n^2)
def intersect1(nums1:list, nums2: list):
    result = []
    for i in range(0, len(nums1)):
        for j in range(0, len(nums2)):
            if(nums1[i] == nums2[j]):
                result.append(nums1[i])
                nums2[j] = None
                break
    return result
    
# Better O(n+m)
def intersect2(nums1:list, nums2: list):
    count = {}
    result = []
    for i in range(0, len(nums1)):
        count[nums1[i]] = count.get(nums1[i], 0) + 1
    for i in range(0, len(nums2)):
        if(count.get(nums2[i], 0) > 0):
            result.append(nums2[i])
            count[nums2[i]] -= 1
    return result

# Better in term of memory O(n+m) (arrays must be sorted)
def intersect3(nums1: list, nums2: list):
    result = []
    i = j = 0
    
    while(i < len(nums1) and j < len(nums2)):
        if nums1[i] == nums2[j]:
            result.append(nums1[i])
            i += 1
            j += 1
        elif nums1[i] < nums2[j]:
            i += 1
        else:
            j += 1
    return result