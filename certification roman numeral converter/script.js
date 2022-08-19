let myNum = 1000;

let result = convertToRoman(myNum)
console.log(result);

function convertToRoman(num) {  //why use a flytrap when you have a HAMMER?!
    if(num>=4000){
        return "Yeah, no overline";
    }
    let roman = ""; //empty string
    let Mil=0, Cent=0, Dec=0, Uni=0;
    
    if(num>=1000){
        Mil=Math.floor(num/1000);
        num=Math.floor(num%1000);
    }
    if(num>=100){
        Cent=Math.floor(num/100);
        num=Math.floor(num%100);
    }
    if(num>=10){
        Dec=Math.floor(num/10);
        Uni=Math.floor(num%10);
    }
    else{
        Uni=num;
    }
    console.log(Mil, Cent, Dec, Uni);
    while(Mil>0){   //Miles
        roman += "M";
        Mil--;
    }
    let ten="M";    //Centenas
    let five="D";
    let one="C";
    switch(Cent){   
        case 9: 
            roman += one += ten;
            break;
        case 8: 
        case 7: 
        case 6: 
            roman += five;
            while(Cent>5){
                roman += one;
                Cent--;
            }
            break;
        case 5: 
            roman += five;
            break;
        case 4: 
        roman += one += five;
        break;
        case 3:   
        case 2:   
        case 1:   
            while(Cent>0){
                roman += one;
                Cent--;
            }
    }
    ten="C";
    five="L";
    one="X";
    switch(Dec){   //Decenas
        case 9: 
            roman += one += ten;
            break;
        case 8: 
        case 7: 
        case 6: 
            roman += five;
            while(Dec>5){
                roman += one;
                Dec--;
            }
            break;
        case 5: 
            roman += five;
            break;
        case 4: 
        roman += one += five;
        break;
        case 3:   
        case 2:   
        case 1:   
            while(Dec>0){
                roman += one;
                Dec--;
            }
    }
    ten="X";
    five="V";
    one="I";
    switch(Uni){   //Unidades
        case 9: 
            roman += one += ten;
            break;
        case 8: 
        case 7: 
        case 6: 
            roman += five;
            while(Uni>5){
                roman += one;
                Uni--;
            }
            break;
        case 5: 
            roman += five;
            break;
        case 4: 
        roman += one += five;
        break;
        case 3:   
        case 2:   
        case 1:   
            while(Uni>0){
                roman += one;
                Uni--;
            }
    }
    return roman;
}