class user {
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
  }
  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }
  static compareByincome(user1, user2) {
    return user1.income - user2.income;
  }
}
const user1 = new user("vaibhav", 710, 15000);
const user2 = new user("sanket", 30, 94940);
const user3 = new user("saurabh", 40, 80000);

const users = [user1, user2, user3];
users.sort(user.compareByincome);

console.log(users);
