class BankAccount {
  custumerName;
  accountNumber;
  #balance = 0;

  constructor(custumerName, balance = 0) {
    this.custumerName = custumerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
  setBalance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input");
    }
    this.#balance = amount;
  }

  getBalance() {
    return this.#balance;
  }
}

class CurruntAccount extends BankAccount {
  transactionlimite = 50000;

  constructor(custumerName, balance = 0) {
    super(custumerName, balance);
  }

  takepersonalLoan(amount) {
    console.log("Taking business loan" + amount);
  }
}

const vaibhavAccount = new CurruntAccount("vaibhav", 8000);
vaibhavAccount.setBalance(60000000);
console.log(vaibhavAccount.getBalance());
