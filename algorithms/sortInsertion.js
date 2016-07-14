function insertionSort(arr) {
  var length = arr.length;
  var element;
  var index;

  for (var i = 1; i < length; i++) {
    element = arr[i];
    index = i;
    for (var j = i - 1; j > -1 && element < arr[j]; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[index] = element;
  }
  return arr;
}

console.log(insertionSort([9,8,7,6,5,4,3,2,1]));