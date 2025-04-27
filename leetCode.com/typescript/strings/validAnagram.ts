// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram1(s: string, t: string): boolean {
    if (s.length != t.length)
        return false

    let count: { [key: string]: number } = {}
    for (const c of s)
        count[c] = (count[c] ?? 0) + 1
    for (const c of Object.keys(count)) {
        if (count[c] == Array.from(t.matchAll(new RegExp(c, 'g'))).length)
            continue  
        else
            return false
    }
    return true
};

// Or
function isAnagram2(s: string, t: string): boolean {
    if (s.length != t.length)
        return false

    let count: { [key: string]: number } = {}
    for (const c of s)
        count[c] = (count[c] ?? 0) + 1
    for (const c of t) {
        if (!count[c])
            return false
        count[c] -= 1
    }
    return true
};