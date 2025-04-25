// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits: number[]): number[]{
    let add = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + add
        if (sum > 9) {
            digits[i] = sum % 10
            add = sum / 10
        }
        else {
            digits[i] = sum
            add = 0
            break
        }
    }
    if (add > 0) {
        digits = [add].concat(digits)
    }
    return digits
}