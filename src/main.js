import count from './js/count';
import sum from './js/sum';
import './css/index.css';
import './css/iconfont.css';
console.log(count(100,32));
console.log(sum(1,2,3,4,5,6,7));

let arrs = [15,34,6,3,87,14,1,52,10,81,86,54,33,77,66,55,44];

function sort(arrs){

    for(let i=0;i<arrs.length-1;i++){
        for (let j= 0; j<arrs.length-i-1;j++){
            if(arrs[j]>arrs[j+1]){
                let temp = arrs[j];
                arrs[j] = arrs[j+1];
                arrs[j+1] = temp;
            }
        }
    }
}

function show(arrs){
    for(let i=0;i<arrs.length;i++){
        console.log(arrs[i]);
    }
}

sort(arrs);
show(arrs);

function quickSort(arr, startIndex, endIndex) {
    // 递归结束条件：startIndex大于等于endIndex的时候
    if (startIndex >= endIndex) {
        return;
    }
    // 得到基准元素的位置
    let pivotIndex = partition(arr, startIndex, endIndex);
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
}

function partition(arr, startIndex, endIndex) {
    // 选择第一个位置的元素作为基准元素
    let pivot = arr[startIndex];
    let left = startIndex;
    let right = endIndex;
    let index = startIndex;

    // 外循环在左右指针重合或者交错的时候结束
    while (right > left) {
        // right指针从右向左进行比较
        while (right > left) {
            if (arr[right] < pivot) {
                arr[left] = arr[right];
                index = right;
                left++;
                break;
            }
            right--;
        }
        // left指针从左向右进行比较
        while (right > left) {
            if (arr[left] > pivot) {
                arr[right] = arr[left];
                index = left;
                right--;
                break;
            }
            left++;
        }
    }
    arr[index] = pivot;
    return index;
}

let arr = [4, 5, 8, 1, 7, 2, 6, 3];
sort(arr, 0, arr.length - 1);
console.log(arr);
