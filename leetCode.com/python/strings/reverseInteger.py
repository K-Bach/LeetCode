# Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

# Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

def reverse(x: int):
    sign = -1 if x < 0 else 1
    x *= sign 
    res = 0
    while x:
        res = res*10 + x%10
        x //= 10
    res *= sign
    if res >= -2 ** 31 and res < 2 ** 31:
        return res
    return 0