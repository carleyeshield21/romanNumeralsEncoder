function solution(number) {

    // Here, we create an array with the roman numeral combination to simplify the conditional statements
    romannumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM', 'MMM', 'MMMM']

    // Here, we convert the given number to a string so we can take its length and use in the conditional statements and array
    numstring = number.toString()
    length = numstring.length

    // Here we create an array numarr and use the for loop to iterate around the numstring and push the elements to the numarr array, we use the parseInt function to re-convert each element back to a number type
    numarr = []
    for (i = 0; i <= length - 1; i++) {
        numarr.push(parseInt(numstring[i]))
    }

    // Here we create a new array roman and use the for loop, beginning at the last element of the array because we must begin at the units digit we convert to a roman numeral, we push each element to the array roman, each iteration we use the splice function because we need to truncate the used roman numerals and begin counting at zero index
    roman = []
    for (i = numarr.length - 1; i >= 0; i--) {
        // console.log(numarr[i])
        value = numarr[i] - 1
        // console.log(value)

        // console.log(romannumbers[value])
        roman.push(romannumbers[value])
        // console.log(romannumbers.splice(0, 9))
        romannumbers.splice(0, 9)
    }
    // Here we use the function reverse so we can correctly display the roman numeral output, use the toString function to concatenate the roman array with the use of replaceAll function to replace all the commas with a single space
    result = roman.reverse()
    console.log(`The number or year ${number} in Roman Numeral is`)
    console.log(result.toString().replaceAll(',', ''))
}
solution(1666)

// In this code I only assumed the maximum value will be 4999 because roman numerals are usually used in converting years