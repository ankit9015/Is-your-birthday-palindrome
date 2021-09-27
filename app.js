const dob = document.querySelector("#dob");
const buttonShow = document.querySelector("#show-button");
const outputMessage = document.querySelector("#output-message");

function showPalindrome() {
    let dateInput = dob.value.replaceAll("-", "");
    let dateList = dateInput.split("");
    // console.log("initial", dateList);

    dateList = putFormat(dateList);
    const palindrome = isPalindrome(dateList);
    // console.log("final", dateList);
    console.log(palindrome);
}

function isPalindrome(dateList) {
    let mid= dateList.length / 2;
    console.log("mid", mid);
    let left = mid -1;
    let right = mid;
    for (let i=0; i < mid; i++) {
        // console.log("l, r", dateList[left], dateList[right]);
        if(dateList[left] !== dateList[right]) {
            return false;
        } 
        left = left - 1;
        right = right + 1;
    }
    return true;
};

function putFormat(dateList) {
    const year = dateList.slice(0, 4);
    const month = dateList.slice(4,6);
    const day = dateList.slice(6,8);
    const newList = day.concat(month, year);
    // console.log(newList);
    return newList;
};

buttonShow.addEventListener("click", showPalindrome);