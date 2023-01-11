//like bubble sort, but a little better.
//on first loop, searches for lowest value
//when finished, swaps lowest value for value at 0 index
//on second loop, searches for second lowest value, then
//swaps with value at 1 index
//continue this pattern until whole array is sorted
const selectionSort = (arr) => {

  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; --j) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
}
// does with swap
console.log(selectionSort([5, 4, 2, 6, 8, 14, 1, 3]));


// same question, different answer
const insertionSort = (arr) =>{
  //have index for number to move back
  for(let wrongIndex = 1; wrongIndex < arr.length; wrongIndex++){
      console.log(`trying to move ${arr[wrongIndex]} backwards`);
      //decide what index the number should move back to
      let newIndex = wrongIndex - 1;
      while(arr[newIndex] > arr[wrongIndex]){
          newIndex--;
      }
      newIndex++;
      //loop
      while(newIndex < wrongIndex){
          //swap wrong index with number at newIndex
          let temp = arr[newIndex];
          arr[newIndex] = arr[wrongIndex];
          arr[wrongIndex] = temp;
          //increase new index
          newIndex++;
      }
      console.log(arr);
  }

  return arr;
}

const testArr = [6,4,5,2,8,14,1,3];
// const testArr = [1,2,2,2,2,4,5,6,8,14,3];
console.log(insertionSort(testArr));