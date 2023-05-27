// 1、算法描述
// 快速排序使用分治法把一个数列（list）分为2个数列（sub-lists），具体算法如下：

// 1, 从数列中挑出一个元素，称为 “基准”（pivot）；
// 2, 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
// 3, 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。


console.time("Test code");
// 分区操作
//用于一次以基准值进行排序
function partition(arr, left , right) {
    // 设定基准值 pivot
    let pivot = left; 
    let index = pivot + 1;
    for (let i = index; i <= right; i++){
        //小于基准值的放左边，大于的不变
        if (arr[i] < arr[pivot]) {
           swap(arr, i, index)
           index++
        }
    }
    console.log(arr ,pivot , index);
    //和小于基准值的最右边一个交换位置，实现左边小于基准值，右边大于基准值
    swap(arr, pivot, index - 1)
    console.log(arr, index);
    //返回基准值的位置
    return index - 1
}

// 交换数据
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


function quickSort(arr, left, right) {
    let len = arr.length
    left = typeof left != 'number' ? 0 : left
    right = typeof right != 'number' ? len - 1 : right

    if(left < right){
        //进行一次排序
        let partitionIndex = partition(arr, left, right)
        console.log(partitionIndex);
        //递归对左边进行排序
        quickSort(arr, left, partitionIndex - 1)
        //递归对右边进行排序
        // quickSort(arr, partitionIndex + 1, right)
    }
    return arr
}

// 测试
let darr = [3, 1, 2, 3134, 113, 342, 123412, 55, 111, 4, 234, 5, 5]

console.log(quickSort(darr));


console.timeEnd("Test code");