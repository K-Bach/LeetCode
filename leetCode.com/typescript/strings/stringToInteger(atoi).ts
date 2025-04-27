// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

function myAtoi1(s: string): number{
    s = s.trim()
    if (!s.length)
        return 0
    const sign = s[0] == '-' ? -1 : +1

    if (['-', '+'].includes(s[0]))
        s = s.slice(1, s.length)
    let result = 0

    for (let c of s) {
        if (/[0-9]/.test(c)) {
            result = result * 10 + Number(c)
        }
        else
            break
    }
    result *= sign

    const max = 2 ** 31 - 1
    const min = (-2) ** 31
    
    if (result > max)
        return max
    else if (result < min)
        return min
    return result
}

// Better
function myAtoi2(s: string): number {
    let i = 0;
    const n = s.length;
    let result = 0;
    let sign = 1;

    // Step 1: Skip leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Read digits
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        i++;
    }

    result *= sign;

    // Step 4: Clamp to 32-bit signed int range
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
}

// Even better
function myAtoi3(s: string): number {
    const match = s.match(/^\s*([+-]?\d+)/);
    if (!match) return 0;

    let num = parseInt(match[1], 10);

    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;

    return num;
}

