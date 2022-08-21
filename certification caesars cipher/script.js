function rot13(str) {
    let result = '';
    for(let i=0; i<str.length; i++){
        let charcode = str[i].charCodeAt();
        if(/[A-Z]/.test(str[i])){
            charcode = (str[i].charCodeAt()) + 13;
            if (charcode>90){
                charcode -= 26;
            }
        }
        result += String.fromCharCode(charcode);
    }
    return result;
}
  
let test=rot13("SERR PBQR PNZC\"#=?123");