// class Student {
//   constructor(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }

//   study() {
//     return `${this.name} sedang belajar`;
//   }

//   get StudentInfo() {
//     return `${this.name}, ${this.age}, ${this.grade}`;
//   }

//   set studentGrade(newGrade) {
//     if (newGrade >= 0 && newGrade <= 100) this.grade = newGrade;
//     else {
//       console.log("Grade must be between 0 and 100");
//     }
//   }
// }

// let Users = [];

// let data = [
//   ["Roger", 20, 80],
//   ["Dwi Cahya Ramadani", 20, 80],
// ];

// for (let x of data) {
//   Users.push(new Student(x[0], x[1], x[2]));
// }

// console.log(Users[0].study());
// console.log(Users[0].StudentInfo);
// Users[0].studentGrade = 101;
// console.log(Users[0].StudentInfo);

// console.log(Users[1].study());
// console.log(Users[1].StudentInfo);
// Users[1].studentGrade = 101;
// console.log(Users[1].StudentInfo);

// // ======INHERITANCE====== //
// let teachersData = [
//   ["Roger", 20, "Javascript"],
//   ["Dwi Cahya Ramadani", 20, "Javascript"],
// ];
// let Teachers = [];
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, subject) {
//     super(name, age);
//     this.subject = subject;
//   }

//   teach() {
//     return `I'm teaching ${this.subject}.`;
//   }
// }

// for (let x of teachersData) {
//   Teachers.push(new Teacher(x[0], x[1], x[2]));
// }
// console.log(Teachers[0].introduce());
// console.log(Teachers[0].teach());

// =========== ENCAPSULATION ========== //

class BankAccount {
  #balance = 0;

  constructor(name) {
    this.name = name;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return `Deposit of $${amount} successful. Total balance: $${
        this.#balance
      }`;
    } else {
      return `Deposit failed. Amount must be greater than 0.`;
    }
  }

  get getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("John Doe");
console.log(account.deposit(100));
console.log(account.deposit(-50));
console.log(account.getBalance);
