# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

def isPalindrome1(s: str) -> bool:
    s = s.lower()
    i = 0
    sLength = len(s)
    while i < sLength:
        if s[i].isalnum:
            new = s.replace(s[i], '')
            sLength -= sLength - len(new)
            s = new
        else:
            i += 1
    return s[::-1] == s

# Better
def isPalindrome2(s: str) -> bool:
    s = ''.join(c.lower() for c in s if c.isalnum())
    return s[::-1] == s
    