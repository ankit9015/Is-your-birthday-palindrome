const dob = document.querySelector("#dob");
const buttonShow = document.querySelector("#show-button");
const outputMessage = document.querySelector("#output-message");


function checkPalindrome(dateList) {
    let mid= dateList.length / 2;
    // console.log("mid", mid);
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

function getDateAllFormat(dateList) {
    const year = dateList.slice(0, 4);
    const month = dateList.slice(4,6);
    const day = dateList.slice(6,8);

    /* format */
    const ddmmyyyy = day.concat(month, year);
    const mmddyyyy = month.concat(day, year);
    const yyyymmdd = year.concat(month, day);
    const ddmmyy = day.concat(month, year.slice(2, 4));
    const mmddyy = month.concat(day, year.slice(2, 4));
    const yymmdd = year.slice(2, 4).concat(month, day);
    const formatList = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    for (let format of formatList) {
        console.log(format);
    }
    return formatList;
};

function checkPalindromeAllDateFormat(dateList) {
    const dateAllFormatList = getDateAllFormat(dateList);
    const checkPalindromeArray = [];
    for(let dateStr of dateAllFormatList) {
        var isPalindrome = false;
        if(checkPalindrome(dateStr)) {
            isPalindrome = true;
        }
        checkPalindromeArray.push(isPalindrome);    
    }
    // return isPalindrome;
    console.log(checkPalindromeArray);
    return checkPalindromeArray.some(element => element);
};

function showMessage(isPalindrome) {
    if(isPalindrome) {
        outputMessage.innerText = 'Your Birthday is a Palindrome date!!';
    } else {
        outputMessage.innerText = `Your Birthday is not a Palindrome date`;
    }
}

function clickHandler() {
    var bdayStr = dob.value;
    if(bdayStr !== '') {
        bdayStr = bdayStr.replaceAll("-", "");
        dateList = bdayStr.split("");
        // console.log(dateObject);
        var isPalindrome = checkPalindromeAllDateFormat(dateList);
        // console.log(isPalindrome);
        showMessage(isPalindrome);

    } else {
        outputMessage.innerText = "Enter valid Birthday."
    }
}



buttonShow.addEventListener("click", clickHandler);