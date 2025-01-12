"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];



function findSmallestNumber(array){

let smallest = array[0];
for (let number of myNumbers) {
    if (number < smallest) {
        smallest = number
    }
}
return smallest;

}

function findLargestNumber(array){

        let largest = array[0];
        for (let number of myNumbers) {
            if (number > largest) {
             largest = number
            }
        }
        return largest;
}

function findAverage(array){
    let sum = 0;
    for (let number of myNumbers) {
        sum += number;
    }
    return sum / array.length;

}
























function render() {
    // Call the created functions
smallestNumberElement.textContent = findSmallestNumber(myNumbers);
largestNumberElement.textContent = findLargestNumber(myNumbers);
averageNumberElement.textContent = findAverage(myNumbers);
}

submissionBtn.addEventListener("click", function () {
    render();
});