function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

const makeSmoothie = async () =>{
    const b = await delay(1200);
    console.log("first cal");
    const c = await delay(1200);
    console.log("second")
}

callSelf(4);

async function callSelf(nTimes){
    await delay(1200);
    console.log("call", nTimes);
    if(nTimes==0){
        return
    }
    else{
        callSelf(nTimes-1);
    }
}