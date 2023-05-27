let list = [1, 2, 3]

// // 使用return， 不能中断
// list.forEach(item => {
//     console.log(item);
//     if(item == 2){
//         return
//     }
// });


// 使用break， 不能中断
// list.forEach(item => {
//     console.log(item);
//     if(item == 2){
//         break //非法break语句
//     }
// });

// 使用continue， 不能中断
// list.forEach(item => {
//     console.log(item);
//     if(item == 2){
//         continue //非法的continue语句:没有迭代语句
//     }
// });

// try catch

try{
    list.forEach(item => {
        if(item == 2){
            throw('退出了')
        }
        console.log(item);
    });
}catch(err){
    console.log(err,'err')
}

// forEach 的实现
Array.prototype.newForEach =  function(fn){
    for (let i = 0; i < this.length; i++) {
        if( i in this){
            fn(this[i], i)
        }
    }
}

