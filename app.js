//1
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 75 },
];

const result = students.map((student) => {
  return {
    name: student.name,
    score: student.score,
    passed: (student.score > 60 ? true : false)   
  }
})

console.log(result)

//2
const songs = [
  { title: "Bohemian Rhapsody", duration: 367 },
  { title: "Hotel California", duration: 420 },
  { title: "Stairway to Heaven", duration: 482 },
];

const newDuration = songs.map((song)=> {
  let minutes = Math.floor(song.duration / 60 )
  let seconds = song.duration % 60 
  return {
    title: song.title,
    duration: `${minutes}:${seconds}`
  }
})
console.log(newDuration)

//3
const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 },
];

const annualSalaries = employees.map((employee) => {
  return {
    name: employee.name,
    annualIncome: employee.salary * 12
  }
})
console.log(annualSalaries)

//4
const newStudents = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
];

const studentsList = newStudents.map((student)=> {
  return {
    name: student.name,
    age: student.age,
    classification: student.age > 18 ? "adult" : "minor"
  }
})
console.log(studentsList)

//5
const newEmployees = [
  { name: "Emily", salary: 60000 },
  { name: "David", salary: 45000 },
  { name: "Grace", salary: 75000 },
];

const salariesInDollar = newEmployees.map((worker)=> {
  return {
    name: worker.name,
    salary: '$'+worker.salary
  }
})
console.log(salariesInDollar)

//6
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 50 },
  { name: "Smartphone", price: 800 },
];

const productLabel = products.map((product)=>{
  return {
    name: product.name,
    label: product.price > 100 ? "expensive" : "affordable"
  }
})
console.log(productLabel)

//7
const books = [
  { title: "The Catcher in the Rye", year: 1951 },
  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  { title: "The Hunger Games", year: 2008 },
];

const classificationOfBooks = books.map((book)=> {
  return {
    title: book.title,
    category: book.year > 2000 ? "modern":"classic"
  }
})
console.log(classificationOfBooks)

//8
const developers = [
  { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
  { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },
  { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
];

const annualIncomeOfDeveloper = developers.map((developer)=> {
  return {
    name: developer.name,
    annualIncome: (developer.hourlyRate * developer.hoursPerWeek * 50)
  }
})
console.log(annualIncomeOfDeveloper)

//9
const salesReps = [
  { name: "David", monthlyCommission: 8000 },
  { name: "Helen", monthlyCommission: 10000 },
  { name: "Ivan", monthlyCommission: 6000 },
];

const annualIncomeOfSalesPerson = salesReps.map((salesPerson)=> {
  return {
    name: salesPerson.name,
    annualIncome: (salesPerson.monthlyCommission * 12) + 50000
  }
})
console.log(annualIncomeOfSalesPerson)

//10
const NewStudents = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 60 },
  { name: "Charlie", score: 92 },
];

const findGrade = (score) => {
  let grade;
  if(score >= 90){
    grade = "A"
  } else if(score >= 80){
      grade = "B"
    }
  else if(score >= 70){
    grade = "C"
  }
  else if(score >= 60){
    grade = "D"
  }
  else {
    grade = "F"
  }
  return grade;
}

const gradesOfStudents = NewStudents.map((student)=>{
  return {
    name: student.name,
    grade: findGrade(student.score)
  }
})

console.log(gradesOfStudents)
