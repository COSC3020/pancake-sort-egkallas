function flip(array, n) {
    let x = array.slice(0, n);
    let y = array.slice(n);
    x.reverse();
    array.splice(0, n, ...x);
    array.splice(n, y.length, ...y);
    return array;
}

function isSorted(a) {
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[i - 1]) {
            return false;
        }
    }
    return true;
}

function findMin(array, start){

    var min = start;
    for(var i = start + 1; i < array.length; i++){
        if(array[min] > array[i]){
            min = i;
        }
    }
    return min;
}

function pancakeSort(array) {
    var endIndex = array.length - 1;
    while (!isSorted(array)) {
        for (var i = 0; i <= endIndex; i++) {
            var minIndex = findMin(array, i);
            flip(array, minIndex + 1);
            flip(array, i + 1);
        }
        endIndex--; 
    }
}
