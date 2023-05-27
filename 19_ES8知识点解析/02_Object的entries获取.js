const obj = {
  name: "why",
  age: 18
}

console.log(Object.entries(obj))
const objEntries = Object.entries(obj)
objEntries.forEach(item => {
  console.log(item[0], item[1])
})

console.log(Object.entries(["abc", "cba", "nba"]))
console.log(Object.entries("abc"))

let map1 = new Map()
map1.set('0', 'foo');
map1.set(1, 'bar');

console.log(map1.entries());

for(var value of objEntries) {
  console.log(value);
}