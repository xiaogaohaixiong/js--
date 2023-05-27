
var personObj = {
  running: function() {
    console.log("running")
  }
}

function createStudent(name) {
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function() {
    console.log("studying~")
  }
  return stu
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kobe")
var stuObj2 = createStudent("james")
console.log(stuObj, stuObj1, stuObj2); //{ name: 'why', studying: [Function] } { name: 'kobe', studying: [Function] } { name: 'james', studying: [Function] }
