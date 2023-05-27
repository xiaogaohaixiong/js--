// 1.生成器来替代迭代器
function* createArrayIterator(arr) {

  // 3.第三种写法 yield*
  yield* arr

  // 2.第二种写法
  // for (const item of arr) {
  //   yield item
  // }
  // 1.第一种写法
  // yield "abc" // { done: false, value: "abc" }
  // yield "cba" // { done: false, value: "abc" }
  // yield "nba" // { done: false, value: "abc" }
}

// const names = ["abc", "cba", "nba"]
// const namesIterator = createArrayIterator(names)

// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())

// 2.创建一个函数, 这个函数可以迭代一个范围内的数字
// 10 20
// function* createRangeIterator(start, end) {
//   // 生成器方法执行
//   let index = start
//   while (index < end) {
//     yield index++
//   }

//   // 迭代器方法执行
//   let index1 = start
//   return {
//     next: function() {
//       if (index1 < end) {
//         return { done: false, value: index1++ }
//       } else {
//         return { done: true, value: undefined }
//       }
//     }
//   }
// }

// const rangeIterator = createRangeIterator(10, 20)
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())

// 3.class案例
class Classroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }

  entry(newStudent) {
    this.students.push(newStudent)
  }

  foo = () => {
    console.log("foo function")
  }
  // 第一种方式:讲一个生成器方法赋值给迭代器
  // [Symbol.iterator] = function*() {
  //   yield* this.students
  // }
  // 第二种: 直接在[Symbol.iterator]前加一个*
  *[Symbol.iterator]() {
    yield* this.students
  }
}

const classroom = new Classroom("3幢", "1102", ["abc", "cba"])
for (const item of classroom) {
  console.log(item) 
  // abc
  // cba
}

