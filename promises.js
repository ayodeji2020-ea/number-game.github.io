//PROMISES
// 3 state of promises
// processing or pending state
// fulfilled or resolved
// rejected

// let myPromise = new Promise((resolve, reject) => {
//     console.log("Promise is created");
// });

// let matchWon = false;
// let checkScore = new Promise((resolve, reject) => {
//     if(matchWon){
//         resolve("your team won the match");
//     }else{
//         reject("your team lost the match");
//     }
// });

// console.log(checkScore);

// when a promise resolved we can use .then() and .catch()
// promise.then()
// .then()
// .catch()
// .finally()

let statusCode = 200; //200, 404, 500
let checkTransfer = new Promise((resolve, reject) => {
    if(statusCode === 200){
        resolve("Transfer Successful");
    }else{
        reject("Transfer Failed");
    }
});

checkTransfer
    .then(function updateBalance(param) {
        console.log(param);
        console.log("Bal is: XXXX");
    }).catch(function errorTransfer(error) {
        console.log(error);
    }).finally(function done() {
        console.log("Done processing your transfer");
    });
