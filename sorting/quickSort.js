const quickSort = (arr) => {
    const start = 0, end = arr.length - 1;
    sortArray(arr, start, end);
}
  
const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}
  
const sortArray = (arr, low, high) => {
    if(low >= high){
      return;
    }
    
    let start = low, end = high;
    
    const pivot = arr[low];
    
    while(start < end){
      while(arr[start] < pivot){
        start++;
      }
      while(arr[end] > pivot){
        end--;
      }
      
      if(start <= end){
        swap(arr, start, end);
        start++;
        end--;
      }
    }
    
    sortArray(arr, low, end); // dividing array into a part
    sortArray(arr, start, high); // dividing array into a part
}
  
const unsortedArray = [4,3,2,1,7,6,5];
quickSort(unsortedArray);
console.log(unsortedArray);