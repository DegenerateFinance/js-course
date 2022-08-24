function checkCashRegister(price, cash, cid) {
    let changeAmmount=cash-price;
    let returnValue={
        "status" : "",
        "change": []
    };
    let currency={
        "value":[100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01],
        "name":["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER",
        "DIME", "NICKEL", "PENNY"]
    };
    let totalCash=0;
    for(let i=0;i<=8;i++){
        totalCash+= cid[i][1];
    }
    if(totalCash<changeAmmount){
        returnValue.status= "INSUFFICIENT_FUNDS";
        return returnValue;
    }
    if(totalCash==changeAmmount){
        returnValue.status="CLOSED";
        returnValue.change=cid;
        console.log(returnValue);
        return returnValue;
    }
    for(let i=0; i<=8;i++){     //and this is for OPEN
        let firstCall=0;
        while((changeAmmount+0.00001)>= currency.value[i] && cid[8-i][1]>0){ //float aproximation BS
            changeAmmount -= currency.value[i];
            cid [8-i][1] -= currency.value[i];
            if(firstCall==0){
                returnValue.change.push([currency.name[i], currency.value[i]]);
                firstCall=1;
            }
            else{
                returnValue.change[returnValue.change.length-1][1] += currency.value[i];
            }
        }
    }
    if(changeAmmount>0.00001){  //float aproximation BS
        returnValue.status= "INSUFFICIENT_FUNDS";
        returnValue.change=[];
    }
    else{
        returnValue.status = "OPEN";
    }
    return returnValue;
}
/*
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], 
["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
*/

// 5

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], 
["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], 
["TWENTY", 0], ["ONE HUNDRED", 0]])


// 6
/*
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], 
["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
["TWENTY", 0], ["ONE HUNDRED", 0]])
*/