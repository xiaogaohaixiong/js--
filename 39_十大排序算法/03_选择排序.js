// 1、算法描述
// 直接选择排序
// 每一次遍历待排序的数据元素从中选出最小（或最大）的一个元素，存放在序列的起始（或者末尾）位置（和原存放位置上的元素交换顺序），直到全部待排序的数据元素排完。
console.time("Test code");
//交换数组下标x位和y位的元素
function swap(arr, x, y) {
    arr[x] = arr[x] - arr[y]
    arr[y] = arr[y] + arr[x]
    arr[x] = arr[y] - arr[x]
    return arr
}
function selectionSort(arr) {
    let t = arr.length
    let x = 0
    while (x != t) {
        let min = 0;
        let tmp = Number.MAX_VALUE
        //选出最小的元素的下标
        for (let i = x; i < t; i++) {
            if (tmp > arr[i]) {
                tmp = arr[i]
                min = i
            }
        }
        //不是当前位置，则交换顺序
        if (x != min) {
            swap(arr, x, min)
        }
        x++
    }
    return arr
}
console.log(selectionSort([3, 1, 2, 3134, 113, 342, 123412, 55, 111, 4, 234, 5, 5]))

console.timeEnd("Test code");