// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// USING BITWIESE XOR OPERATION 
// A   B   A XOR B
// ----------------
// 0   0     0
// 0   1     1
// 1   0     1
// 1   1     0

// TIME COMPLEXITY → O(n)
// SPACE COMPLEXITY → O(1)

function findUnique(nums) {
    if (nums.length === 0) {
      throw new Error("Empty array");
    }
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        // result = result ^ nums[i]
      result ^= nums[i];
    }
    return result;
  }
  const result = findUnique([2, 2, 1]);  // [2,2,1,3,1]
  console.log('Unique element in the array is :',result);
  
  