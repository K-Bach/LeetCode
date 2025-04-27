# Write a function that reverses a string. The input string is given as an array of characters s.

# You must do this by modifying the input array in-place with O(1) extra memory.

def reverseString(s: list[str]):
    for i in range(0,len(s)//2):
        backup = s[i]
        s[i] = s[len(s)-1-i]
        s[len(s)-1-i] = backup