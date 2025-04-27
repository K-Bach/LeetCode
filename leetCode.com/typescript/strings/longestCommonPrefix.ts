// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

function longestCommonPrefix1(strs: string[]): string {
    if (!strs.length)
        return ''
    let minLength = strs[0].length
    
    for (const s of strs) {
        if (s.length < minLength)
            minLength = s.length
    }
    
    let prefix = ''
    let common = true
    for (let i = 0; i < minLength; i++){
        const letter = strs[0][i]
        for (let j = 0; j < strs.length; j++){
            if (letter != strs[j][i]) {
                common = false
                break
            }
        }
        if (common)
            prefix += letter
        else
            break
        
    }
    return prefix
};

// Better
function longestCommonPrefix2(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}
