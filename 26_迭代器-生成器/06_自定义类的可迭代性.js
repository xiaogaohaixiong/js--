// class Person {

// }

// const p1 = new Person()
// const p2 = new Person()
// const p3 = new Person()

// 案例: 创建一个教室类, 创建出来的对象都是可迭代对象
class Classroom {
  constructor(address, name, students, ddd) {
    this.address = address
    this.name = name
    this.students = students,
    this.ddd = ddd
  }

  entry(newStudent) {
    this.students.push(newStudent)
  }

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        if (index < this.students.length) {
          return { done: false, value: this.ddd[this.students[index++]]  }
        } else {
          return { done: true, value: undefined }
        }
      },
      return: () => {
        console.log("迭代器提前终止了~")
        return { done: true, value: undefined }
      }
    }
  }
}

let obj = {
  name:'gao',
  age:'19'
}
console.log(Object.keys(obj));

const classroom = new Classroom("3幢5楼205", "计算机教室", Object.keys(obj) , obj)
classroom.entry("lilei")

for (const stu of classroom) {
  console.log(stu)
  if (stu === "why") break
}

