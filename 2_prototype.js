function BankAccount(customerHolder, balance = 0) {
  this.customerName = customerHolder;
  this.accountHolder = Date.now();
  this.balance = balance;

  //   this.deposit = function (amount) {
  //     this.balance += amount;
  //   };

  //   this.withdraw = (amount) => {
  //     this.balance -= amount;
  //   };
}
const VaibhavAccount = new BankAccount("Vaibhav");
const saurabhAccount = new BankAccount("saurabh");
const sanketAccount = new BankAccount("sanket", 2000);
// console.log(VaibhavAccount, sanketAccount);

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = (amount) => {
  this.balance -= amount;
};

VaibhavAccount.deposit(3000);
sanketAccount.deposit(3000);

console.log(VaibhavAccount);
console.log(sanketAccount);
console.log(saurabhAccount);
