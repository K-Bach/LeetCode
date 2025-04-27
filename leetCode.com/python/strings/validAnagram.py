# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

def isAnagram1(s: str, t:str):
    if len(s) != len(t):
        return False
    count = {}
    for i, c in enumerate(s):
        count[c] = count.get(c, 0) + 1
    for k in count:
        if t.count(k) != count.get(k):
            return False
    return True

# Or
def isAnagram2(s: str, t:str):
    if len(s) != len(t):
        return False
    count = {}
    for c in s:
        count[c] = count.get(c, 0) + 1
    for c in t:
        if c not in count or count.get(c) == 0:
            return False
        count[c] -= 1
    return True
    