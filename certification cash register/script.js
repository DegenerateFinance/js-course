function checkCashRegister(price, cash, cid) {
    let changeAmmount=cash-price;
    let returnValue={
        "status" : "OPEN",
        "change": []
    };
    
    let bills = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]; //bills and coins
    let quotes = [`"ONE HUNDRED"`, `"TWENTY"`, `"TEN"`, `"FIVE"`, `"ONE"`, `"QUARTER"`, `"DIME"`, `"NICKEL"`, `"PENNY"`];
    //yes, I could bills and quotes into a class, but I already have to change stuff
    
    for(let i=0;i<=8;i++){
        let firstCall=0;
        while(changeAmmount>=bills[i] && cid[8-i][1]!=0){  
            changeAmmount -= bills[i];
            cid [8-i][1] -= bills[i];
            if(firstCall==0){
                returnValue.change.push([quotes[i], Number(bills[i])]);
                firstCall=1;
            }
            else{
                returnValue.change[returnValue.change.length-1][1]+=Number(bills[i]);
            }
        }
    }
    if(changeAmmount>0){
        returnValue.status= "INSUFFICIENT_FUNDS";
    }
    else {
        for(let i=0;i<=8;i++){
            if(cid[i][1]==0){
                returnValue.status = "CLOSED";
            }else{
                returnValue.status = "OPEN" ;
                break;
            }
        }
    }
    /*
    returnValue.change.push(quotes[5], bills[2]);
    returnValue.change[returnValue.change.length-1]+=bills[1];*/
    console.log(typeof(returnValue.change[1]) )
    return returnValue;
}

let testOutput= checkCashRegister(20, 28, [["PENNY", 10], ["NICKEL", 10], 
["DIME", 10], ["QUARTER", 0], ["ONE", 0], ["FIVE", 5], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 100]]);

console.log(testOutput);