# Cash Register
A java-script program that simulates a cash register returning change.

There are three inputs for the checkCashRegister() function:
<br>
<h3>price</h3> = The price of an item.
<br>
<h3>cash</h3> = The amount of cash the customer is using to pay.
<br>
<h3>cid</h3> = The amount of cash in the drawer. This is input as an array
<br><br>
Example =
<br>
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
<br><br>
If the register determines there is enough change to complete the transaction, it will output its status as <b>"OPEN"</b>.
<br><br>
If the register determines there is not enough change to complete the transaction, it will output its status as <b>"INSUFFICIENT_FUNDS"</b>.
<br><br>
If the register determines there is just enough change to complete the transaction, it will output its status as <b>"CLOSED"</b>.
