// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function removeNonAlphanumericFromString(s: string): string{
    const allowed = "qwertyuiopasdfghjklzxcvbnm1234567890"
    let i = 0
    let sLength = s.length 
    while (i < sLength){
        if (!allowed.includes(s[i])){
            s = s.slice(0, i) + s.slice(i + 1, s.length)
            sLength--
        }
        else
            i++
    }
    return s
}

function isPalindrome1(s: string): boolean{
    s = s.toLowerCase()
    s = removeNonAlphanumericFromString(s)
    for (let i = 0; i < Math.floor(s.length / 2); i++){
        if (s[i] == s[s.length - 1 - i])
            continue
        return false
    }
    return true
}

// Better
function isPalindrome2(s: string): boolean{
    const filtered = s.toLowerCase().split('').filter(c => /[a-z0-9]/.test(c)).join('')
    return filtered.split('').reverse().join('') === filtered
}