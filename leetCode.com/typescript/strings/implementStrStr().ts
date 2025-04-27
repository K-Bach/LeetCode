// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr1(haystack: string, needle: string): number {
    return haystack.indexOf(needle)
};

// Manual
function strStr2(haystack: string, needle: string): number {
    const n = haystack.length;
    const m = needle.length;

    if (m === 0) {
        return 0;
    }

    for (let i = 0; i <= n - m; i++) {
        if (haystack.substring(i, i + m) === needle) {
            return i;
        }
    }
    return -1;
}
