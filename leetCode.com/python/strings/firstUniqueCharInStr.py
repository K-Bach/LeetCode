# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

def firstUniqChar(s: str):
    for i in range (0, len(s)):
            if s.count(s[i]) == 1:
                return i
    return -1