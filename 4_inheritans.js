class BankAccount {
  custumerName;
  accountNumber;
  balance = 0;

  constructor(custumerName, balance = 0) {
    this.custumerName = custumerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class SavingAccount extends BankAccount {
  transactionlimite = 10000;

  constructor(custumerName, balance = 0) {
    super(custumerName, balance);
  }

  takepersonalLoan(amount) {
    console.log("Taking personal loan" + amount);
  }
}
const vaibhavAccount = new SavingAccount("vaibhav", 9000);
vaibhavAccount.deposit(1000)
vaibhavAccount.withdraw(1000)
vaibhavAccount.takepersonalLoan ( 40000)
console.log(vaibhavAccount);




// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountHolder = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function CurruntAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionlimit = 50000;
// }

// // CurruntAccount.prototype = object.create(BankAccount.prototype);

// CurruntAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("Taking business loan" + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionlimit = 10000;
// }

// SavingAccount.prototype = object.create(BankAccount.prototype);

// SavingAccount.prototype.takepersonelloan = function (amount) {
//   console.log("taking business loan" + amount);
// };

// const vaibhavAccount = new SavingAccount("vaibhav", 9000);
// console.log(vaibhavAccount);
