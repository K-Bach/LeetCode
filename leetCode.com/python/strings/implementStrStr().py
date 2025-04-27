# Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

def strStr1(haystack: str, needle: str) -> int:
    return haystack.find(needle)

# Manual
def strStr2(haystack: str, needle: str) -> int:
    n, m = len(haystack), len(needle)
    if m == 0:
        return 0

    for i in range(n - m + 1):
        if haystack[i:i+m] == needle:
            return i
    return -1
