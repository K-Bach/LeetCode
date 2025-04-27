// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

function firstUniqChar1(s: string): number{
    let notUnique = new Set()

    for (let i = 0; i < s.length; i++){
        if (!notUnique.has(s[i])) {
            if (s.lastIndexOf(s[i]) == i)
                return i
            notUnique.add(s[i])
        }
    }
    
    return -1
}

// Better
function firstUniqChar2(s: string): number {
    const count: Record<string, number> = {};

    // Count characters
    for (const c of s) {
        count[c] = (count[c] || 0) + 1;
    }

    // Find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}