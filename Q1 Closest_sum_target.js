// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// TIME COMPLEXITY → O(n log n) due to sortng
// SPACE COMPLEXITY → O(1)  FOR SORTING IT'S DEPEND ON DATA STRACTURE MAY BE IT O(log n)
function findClosestSumTarget (nums, target){
  nums.sort((a,b) => a-b); // sortin the nums
  let targetClosestSum = nums[0] + nums [1] + nums[2];  // if num have non-neg integer then first three element sum will be the closest sum to the target
  let n = nums.length;
  for(let i=0; i < n-2; i++){  // doing n-2 because in last of nums array we have to make pair of 3 integers so we leave two space

    let leftSide = i + 1;
    let rightSide = n-1;                       

    while(leftSide < rightSide){   

       let currentThreeIntSum = nums[i] + nums[leftSide] + nums[rightSide]
      if(currentThreeIntSum === target){
        return currentThreeIntSum;

      }else if( Math.abs(currentThreeIntSum - target) < Math.abs(targetClosestSum - target)){ // checking whose difference is minimum to the target value
        targetClosestSum = currentThreeIntSum;

      } else if(currentThreeIntSum < target){  // if target is greater or smaller we inc and dec the pointer
        leftSide ++;

      }else{
        rightSide --;             
      }
    }
  }
  return targetClosestSum;
}
  const result = findClosestSumTarget([-1,2,1,-4], 1)
  console.log('SUM closet to target is : ',result);