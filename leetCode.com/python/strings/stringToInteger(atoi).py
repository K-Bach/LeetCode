# Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

# The algorithm for myAtoi(string s) is as follows:

# Whitespace: Ignore any leading whitespace (" ").
# Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
# Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
# Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
# Return the integer as the final result.

def myAtoi(s: str):
    s = s.strip()
    if not len(s):
        return 0
    sign = -1 if s[0] == '-' else 1
    result = 0
    
    for i in range(1 if s[0] in ['-', '+'] else 0, len(s)):
        if s[i].isdigit():
            result = result*10 + int(s[i])
        else:
            break
    result *= sign
    
    min = -2**31
    max = 2**31 - 1

    if result < min:
        return min
    if result > max:
        return max
    
    return result

# Better
def myAtoi(s: str) -> int:
    i = 0
    n = len(s)
    result = 0
    sign = 1

    # Step 1: Skip leading whitespaces
    while i < n and s[i] == ' ':
        i += 1

    # Step 2: Check for sign
    if i < n and (s[i] == '-' or s[i] == '+'):
        sign = -1 if s[i] == '-' else 1
        i += 1

    # Step 3: Read digits
    while i < n and s[i].isdigit():
        result = result * 10 + int(s[i])
        i += 1

    result *= sign

    # Step 4: Clamp to 32-bit signed int range
    min = -2**31
    max = 2**31 - 1

    if result < min:
        return min
    if result > max:
        return max

    return result

# Even better
import re

def myAtoi(s: str) -> int:
    match = re.match(r'^\s*([+-]?\d+)', s)
    if not match:
        return 0

    num = int(match.group(1))
    
    INT_MIN = -2**31
    INT_MAX = 2**31 - 1
    
    return max(INT_MIN, min(INT_MAX, num))

    