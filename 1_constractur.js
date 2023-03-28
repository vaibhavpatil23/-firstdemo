function BankAccount(customerHolder, balance = 0) {
  this.customerName = customerHolder;
  this.accountHolder = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}
// const VaibhavAccount = new BankAccount("Vaibhav", 80000);
// console.log(VaibhavAccount);
// VaibhavAccount.deposit(90000);
// VaibhavAccount.withdraw(20000);

// dom manipulatiom

const accounts = [];
const accountform = document.querySelector("#accountform");
const customername = document.querySelector("#customername");
const balance = document.querySelector("#balance");

const deposit = document.querySelector("#deposit");
const accountNumber = document.querySelector("#accountNumber");
const Amount = document.querySelector("#Amount");

accountform.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customername.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});
deposit.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  account.deposit(Amount.value);
  console.log(accounts);
});
