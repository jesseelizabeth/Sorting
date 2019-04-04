function bubbleSort(array) {
  /* your code here */
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = swap(array[i], array[j]);
      }
    }
  }
  return array;
}

function swap(num1, num2) {
  return [num2, num1];
}
