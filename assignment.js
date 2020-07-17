// feetToMile
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

// woodCalculator
function fruitCalculator(mango, apple) {
    var mangoCount = mango * 4;
    var appleCount = apple * 4;
    var totalFruit = mangoCount + appleCount;
    return totalFruit;
}

// brickCalculator

// tinyFriend
function biggestNumber(numbers) {
    var largest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var currentNumber = numbers[i];
        if (currentNumber > largest) {
            largest = currentNumber;
        }
        return largest;
    }

}
var largestNumber = biggestNumber(['asad', 5, 23, 56, 88, 32, 12, 16]);
console.log(largestNumber);