const userOne = {
    name: "Marie",
    age: 20,
    courses: []
}
userOne.age = 21
userOne.grade = "A"

userOne.courses.push("Math")
userOne.courses.push("Physics")
userOne.courses.push("Chemistry")

const physicsCourse = userOne.courses.indexOf("Physics")
const newArray = userOne.courses.slice(0, 2)
userOne.array = newArray

console.log(userOne)
console.log(physicsCourse)