const userInputElement = document.getElementById("text-input");
const checkButtonElement = document.getElementById("check-btn");
const resultElement = document.getElementById("user-input")

const checkInputIsValid = () => {
    const userInputValue = userInputElement.value;
    const isValidInput = userInputValue === "" ? false : true
    if (!isValidInput) {
        alert("Please input a value");
    }
    else {
        const input = removeNonAlpha(userInputValue);
        const reversed = reverseArray(input);
        userInputElement.value = "";
        return isPalindrome(input, reversed) === true ? resultElement.innerHTML = `<strong>${userInputValue}</strong> is a Palindrome` : resultElement.innerHTML = `<strong>${userInputValue}</strong> is not a Palindrome`;
        
    }
}

const removeNonAlpha = (input) => {
    const regex = /[a-z0-9]/g
    return input.toLowerCase().match(regex);
}

const reverseArray = (alphaArray) => {
    return alphaArray.map((reversed, idx) => alphaArray[alphaArray.length-1-idx])
}

const isPalindrome = (originalArray, reversedArray) => {
    const originalArrayToString = originalArray.toString()
    const reversedArrayToString = reversedArray.toString()

    return originalArrayToString === reversedArrayToString;
}

checkButtonElement.addEventListener("click", checkInputIsValid);
