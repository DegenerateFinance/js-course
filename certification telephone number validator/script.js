function telephoneCheck(str) {
    let myRegex=/d/;
    return myRegex.test(str);
}

telephoneCheck("555-555-5555");