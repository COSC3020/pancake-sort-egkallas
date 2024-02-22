function flip(array, n) {
    var x = array.slice(0, n);
    var y = array.slice(n);
    x.reverse();
    array.splice(0, n, ...x);
    array.splice(n, y.length, ...y);
    return array;
}

function findMaxIndex(arr, n) {
    var maxIndex = 0;
    for (var i = 1; i < n; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function pancakeSort(arr) {
    if(arr.length < 2){
        return arr;
    }
    for (var i = arr.length; i > 1; i--) {
        
        var maxIndex = findMaxIndex(arr, i);

        if (maxIndex !== i - 1) {
            flip(arr, maxIndex + 1);
            flip(arr, i);
        }
    }
    return arr;
}
