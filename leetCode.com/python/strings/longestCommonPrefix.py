# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

def longestCommonPrefix1(strs: list[str]) -> str:
    if len(strs) == 0:
        return ""
    minLength = len(strs[0])
    prefix = ''
    common = True
    
    for s in strs:
        if len(s) < minLength:
            minLength = len(s)
            
    for i in range(0, minLength):
        letter = strs[0][i]
        for j in range(0,len(strs)):
            if letter != strs[j][i]:
                common = False
                break
        if common:
            prefix += letter
        else:
            break
        common = True
        
    return prefix

# Better
def longestCommonPrefix2(strs: list[str]) -> str:
    if not strs:
        return ""

    prefix = strs[0]

    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    
    return prefix
    