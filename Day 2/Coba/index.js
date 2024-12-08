const studentName = "Roger";
let studentAge = 20;
let studentGrade = undefined;

console.log(
  `Nama kamu ${studentName} dengan umur ${studentAge} tahun dan grade kamu ${studentGrade}`
);

let courseName = "Javascript 101";
let score = 80;
let isPassed = true;
let nextCourse;
let certificateNumber = null;

console.log(
  `Saya sedang belajar ${courseName} dengan score ${score} dan status ${isPassed} dan saya akan belajar ${nextCourse} dan saya akan mendapatkan sertifikat nomor ${certificateNumber}`
);

let contohArray = [1, 2, 3, 4, 5];
console.log(contohArray[2]);

let contohObject = {
  name: "Roger",
  age: 20,
  contact: {
    phone: "08123456789",
    email: "9l0tR@example.com",
  },
};
console.log(contohObject.contact.phone);

let attendance = 60;
let hasPassingGrade = score >= 60;
let hasAttendance = true;
let willPass = hasPassingGrade && hasAttendance;
let needsHelp = !hasPassingGrade || attendance < 60;
let isFailing = !hasPassingGrade;
console.log(willPass);

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, "hayo", 0.9, false];
let obj1 = {
  name: "Roger",
  age: 20,
  contact: {
    phone: "08123456789",
    email: "9l0tR@example.com",
  },
};

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

for (let i of array2) {
  console.log(i);
}

for (let i in obj1) {
  console.log(`${i} : ${obj1[i]}`);
}

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
