var button = document.getElementById("aa");
var responseFromServer=undefined;
button.onclick = function (){
    window.alert("AAAAAA");
    
}

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});


console.log(makeServerRequest)