function checkCashRegister(price, cash, cid) {
/* removes value from remainder, cid, and adds value to used array*/
 var valArr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
 var remainder = cash - price;
 var used = [["PENNY", 0],["NICKEL", 0],["DIME", 0],["QUARTER", 0],["ONE", 0],["FIVE", 0],["TEN", 0],["TWENTY", 0],["ONE HUNDRED", 0]]
 cid.map(obj => obj[1] = obj[1])
 for (let i = valArr.length - 1; i >= 0; i--) {
   while(valArr[i] <= remainder && cid[i][1] > 0) {
     remainder -= valArr[i];
     cid[i][1] -= valArr[i];
     used[i][1] += valArr[i];
     used[i][1] = Math.round(used[i][1] * 100) / 100;
     remainder = Math.round(remainder * 100) / 100;
   }
 }
/* reshifts the used array */
 var newUsed = [];
 used.map(obj => newUsed.unshift(obj))
 var result = {
   status: "",
   change: ""
 }
 let noChange = cid.map(obj => obj[1] < 0).filter(obj => obj === true)
/* checks remainder for results*/
 if(remainder == 0 && noChange.includes(true)) {
   result.status = "CLOSED"
   result.change = used
 } else if(remainder == 0) {
   result.status = "OPEN"
   result.change = newUsed.filter(obj => !obj.includes(0))
 } else {
   result.status = "INSUFFICIENT_FUNDS";
   result.change = [];
 }
 return result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
