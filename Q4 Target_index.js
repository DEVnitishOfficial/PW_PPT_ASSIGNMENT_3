// Question 4
// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// BINARY SEARCH (DIVIDE AND CONQUER MEHTOD)
// TIME COMPLEXITY → O(log n)  logarithmic time complexity 
function findTargetIndex(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return `Found target element at ${mid} index`;  // Return the index if element found
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    } 
    return ` The target element should be on ${left} index`; // Return the index if target element not found
}
const index = findTargetIndex([1,3,5,6], 5);
console.log(index); 