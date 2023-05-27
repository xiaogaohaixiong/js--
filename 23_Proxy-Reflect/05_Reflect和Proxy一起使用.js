const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log("get---------",target, key)
    return Reflect.get(target, key,receiver)
  },
  set: function(target, key, newValue, receiver) {
    // target[key] = newValue
    // console.log("set---------",target[key])

    // const result = Reflect.set(target, key, newValue)
    // console.log("setddddddd", result);
    // if (result) {
    // } else {
    // }
  }
})



objProxy.name = "kobe"

