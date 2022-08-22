function checkCashRegister(price, cash, cid) {
    let returnValue={
        "status" : "OPEN",
        "change": []
    };
    let currency={
        "value":[100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01],
        "name":["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER",
        "DIME", "NICKEL", "PENNY"]
    };

    returnValue.change.push([currency.name[5], currency.value[5]+currency.value[5]]);
    
    console.log(typeof(returnValue.change[0][1]));
    console.log(returnValue);
    return returnValue;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);