// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverse(x: number): number{
    let res = 0
    const sign = x > 0 ? 1 : -1
    x *= sign
    
    while (x) {
        res = (res * 10) + (x % 10)
        x = Math.floor(x / 10)
    }
    res *= sign
    
    if (res >= ((-2) ** 31) && res < (2 ** 31))
        return res
    return 0
}