function countZeroes(arr) {
  
  
  // Set the initial left and right boundaries for our search
 
  
  let left = 0;
  let right = arr.length - 1;

  // Edge cases:
  // If the first element is 0, all the elements are 0, so we return the length of the array.
 
  
  if (arr[0] === 0) {
    return arr.length;
  }
//another edge case: 
  // If the last element is 1, there are no 0s, so we return 0.
 
  
  if (arr[right] === 1) {
    return 0;
  }

  // binary search to find the first zero 
  
while (left <= right) {
    // find the middle index between left and right
let mid = Math.floor((left + right) / 2);

    // Check if the middle element is 0 and also if the one before it is 1
//bc this is the first zero 

    
if (arr[mid] === 0 && arr[mid - 1] === 1) {
      
  // The number of zeroes is the length of the array minus the index of the first zero
      
  
return arr.length - mid;
} else if (arr[mid] === 1) {
      // If the middle element is 1, we ignore the left half and look in the right half
      left = mid + 1;
} else {
      // If the middle element is 0 but not the first zero, we ignore the right half and look in the left half
      right = mid - 1;
    }
  }

  // i think this case should return zero if no 0's found, needs to be updated ******
  return 0;
}

// Example usage:
console.log(countZeroes([1, 1, 1, 1, 0, 0])); // Should print 2
console.log(countZeroes([1, 0, 0, 0, 0])); // Should print 4
console.log(countZeroes([0, 0, 0])); // Should print 3
console.log(countZeroes([1, 1, 1, 1])); // Should print 0
