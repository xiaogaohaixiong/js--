// 工具函数
let _toString = Object.prototype.toString
let map = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number'
}
let getType = (item) => {
  return _toString.call(item).slice(8, -1)
}
let isTypeOf = (item, type) => {
  return map[type] && map[type] === getType(item)
}

let DFSdeepClone = (obj, visitedArr = []) => {
    let _obj = {}
    if (isTypeOf(obj, 'array') || isTypeOf(obj, 'object')) {
      let index = visitedArr.indexOf(obj)
      _obj = isTypeOf(obj, 'array') ? [] : {}
      if (~index) { // 判断环状数据
        console.log(index);
        _obj = visitedArr[index]
      } else {
        console.log(index,'index');
        visitedArr.push(obj)
        for (let item in obj) {
          _obj[item] = DFSdeepClone(obj[item], visitedArr)
        }
      }
    } else if (isTypeOf(obj, 'function')) {
      _obj = eval('(' + obj.toString() + ')');
    } else {
      _obj = obj
    }
    return _obj
  }

  let circleObj = {
    foo: {
      name: function() {
        console.log(1)
      },
      bar: {
        name: 'bar',
        baz: {
          name: 'baz',
          aChild: null //待会让它指向obj.foo
        }
      }
    }
  }
  circleObj.foo.bar.baz.aChild = circleObj.foo
  var circleObjCopy = DFSdeepClone(circleObj)
  console.log(circleObjCopy);