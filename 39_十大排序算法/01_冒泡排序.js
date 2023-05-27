// 1、算法描述
// 1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
// 2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
// 3. 针对所有的元素重复以上的步骤，除了最后一个；
// 重复步骤1~3，直到排序完成。

console.time("Test code");
function bubbleSort(arr) {
    var len = arr.length;
    for(var i = 0; i < len; i++){
        for(var j = 0; j < len-1-i ; j++){
            if(arr[j] > arr[j+1]) { // 相邻元素两两比较
                var temp = arr[j+1]; // 元素交换
                arr[j+1] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}


// 测试
let darr = [3,4,6,2,8,1,9]

// console.log(darr.sort((a,b)=> a-b));

console.log(bubbleSort(darr));


console.timeEnd("Test code");