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
const vaibhavAccount = new BankAccount("vaibhav", 85000);
vaibhavAccount.deposit(15000);
vaibhavAccount.withdraw(15000);
console.log(vaibhavAccount);

const sanketAccount = new BankAccount("sanket");
sanketAccount.deposit(15000);
sanketAccount.withdraw(5000);
console.log(sanketAccount);
