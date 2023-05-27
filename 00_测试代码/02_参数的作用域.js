var x = 0

// 当函数的参数有默认值时, 会形成一个新的作用域, 这个作用域用于保存参数的值
function foo(x, y = function() { x = 3; console.log(x,'x1') }) {
  console.log(x,'x2')
  var x = 2
  console.log(x,'x3')
  y()
  console.log(x,'x4')
}

foo(1)
console.log(x,'x5')

// undefined
// 3
// 2
// 0