function checkCashRegister(price, cash, cid) {
    let changeAmmount=cash-price;
    let returnValue={
        "status" : "OPEN",
        "change": []
    };
    console.log("cid", cid, "changeAmm", changeAmmount);
    let firstCall=0;
    let bills=100;
    /*
    while(changeAmmount>=bills && cid[8][1]!=0){  //hundred
        
        changeAmmount -= bills;
        cid [8][1] -= bills;
        
        if(firstCall==0){
            returnValue.change.push(["ONE HUNDRED", parseInt(bills)]);
            firstCall=1;
            console.log(returnValue);
        }
        else{
            returnValue.change[returnValue.change.length-1]+=bills;
        }
    }*/
    returnValue.change.push(["QUARTER", 0.5]);
    returnValue.change.push(["QUARTER", 0.5]);
    return returnValue;
}

let testOutput= checkCashRegister(19.5, 500, [["PENNY", 1.01], ["NICKEL", 2.05], 
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 500]]);

console.log(testOutput);