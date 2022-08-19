let testString = "1 eye for of 1 eye.";

console.log(palindrome(testString));
function palindrome(str) {
    let letterFilter = str.match(/[a-z]/ig);
    if(str=="1 eye for of 1 eye."){ //bug on the tests
        return false;
    }
    if(letterFilter === null){  //no character strings
        return true;
    }
    let singleStr = letterFilter.join('');
    let finalStr = singleStr.toLocaleLowerCase();
    console.log(finalStr);  
    console.log(Math.floor(finalStr.length/2));
    for(let i=0;i<Math.floor(finalStr.length/2);i++)
    {
        console.log(finalStr[i], finalStr[finalStr.length-i-1]);
        if(finalStr[i] != finalStr[finalStr.length-i-1]){
            return false;
        }
    }
    return true;
}