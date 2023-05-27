

// 实现深拷贝
let s2 = Symbol("bbb")
const obj = {
    name:"why",
    age: 18,
    friend:{
        name:'james',
        address:{
            city:'广州'
        }
    },
    bar(){
        console.log('bar函数')
    },
    foo:function(){
        console.log('foo函数')
    },
    llis:undefined,
    s2,
}

let list = JSON.parse(JSON.stringify(obj))
console.log(list);
console.log(obj);