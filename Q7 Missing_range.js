/* 💡 **Question 7**
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

**Example 1:**
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

**Explanation:** The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
 */

// TIME COMPLEXITY O(n)   
// SPACE COMPLEXITY O(1)
function findMissingRanges(nums, lower, upper) {
    const ranges = [];
    let start = lower;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > start) {
        ranges.push(findRange(start, nums[i] - 1));
      }
      start = nums[i] + 1;
    }
  
    if (start <= upper) {
      ranges.push(findRange(start, upper));
    }
  
    return ranges;
  }
  
  function findRange(start, end) {// creating function to find range
    return start === end ? [start,end] : [start, end];  // if it's evalute true then it's not necessery to print the end, only print [start, end(evoid)] but here i print because in qustion it's given the output should be [2,2] that's why i print [start,end] otherwise it's not needed
  }
  

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// OPTIMIZED
// TIME COMPLEXITY O(n)   
// SPACE COMPLEXITY O(1)
function findMissingRanges(nums, lower, upper) {
    const ranges = [];
    let prev = lower - 1;
  
    for (let i = 0; i <= nums.length; i++) {
      let curr = i === nums.length ? upper + 1 : nums[i]; // 
  
      if (curr - prev > 1) {
        ranges.push(findRange(prev + 1, curr - 1));
      }
  
      prev = curr; // updating the prev value to the current nums 
    }
  
    return ranges;
  }
  
  function findRange(start, end) { // creating function to find range
    return start === end ? [start,end] : [start, end];
  }
  const Result = findMissingRanges( [0, 1, 3, 50, 75], 0 , 99);
  console.log(" The missing range is : ",Result);
    