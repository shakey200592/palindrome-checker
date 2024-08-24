/*
User Stories:

You should have an input element with an id of "text-input" [DONE]
You should have a button element with an id of "check-btn" [DONE]
You should have a div, span or p element with an id of "result" [DONE]
When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value" [DONE]
When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome"
When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome"
When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome"
When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text "race car is a palindrome"
When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome"
When the #text-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text "A man, a plan, a canal. Panama is a palindrome"
When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text "never odd or even is a palindrome"
When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text "nope is not a palindrome"
When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome"
When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text "My age is 0, 0 si ega ym. is a palindrome"
When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text "1 eye for of 1 eye. is not a palindrome"
When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text "0_0 (: /-\ :) 0-0 is a palindrome"
When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text "five|\_/|four is not a palindrome"
*/

// TODO: get the input from a user and store in a variable
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







// TODO: when check is clicked check to see if a value is entered. if empty display an alert to the user. "Please input a value"
// TODO: remove all alphanumeric characters from the input
// TODO: turn the whole input into a single case (lowercase)
