// Question 2
// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// TIME COMPLEXITY → O(n^3)  due to three nested loop two for loop one while loop
// SPACE COMPLEXITY → O(1)  using single array for storing the quadruplets

function makeUniqueQuadruplets ( nums , target){

   let uniqueQuadrauplets = [];  // storing final result in this array
    let n = nums.length;
    
    nums.sort((a,b) => a-b);
    for(let i=0; i < n-3; i++){   // n-3 ensure there should be atleast 3 element should be at last to from a quadruplates in the nums array i.e (nums[j] , nums[left], nums[right]) 
      if( i > 0 && nums[i] === nums[i-1]){
        continue; // skip the duplicate element if found in it's left side
      }

      for(let j = i+1; j < n-2; j++){  //n-2 it is same as n-3 it left space for nums[left], nums[right]
        if( j > i+1  && nums[j] === nums[j-1]){
          continue; // skip duplicate element if found in it's left
        }

        let left = j+1;
      let right = n-1;

      while(left < right){
        const quadrupletsSum = nums[i] + nums[j] + nums[left] + nums[right];

        if( quadrupletsSum === target){
          uniqueQuadrauplets.push([nums[i], nums[j], nums[left],nums[right]]);

          while( left < right && nums[left] === nums[left + 1]){
            left ++;  // skip duplicates
          }
          while (left < right && nums[right] === nums[right -1]){
            right--;  // skip duplicates
          }

          left ++;
          right --;
        }else if( quadrupletsSum < target){
          left++
        }else{
          right--;
        }
      }

      }
    }
    return uniqueQuadrauplets;
}

 let result = makeUniqueQuadruplets([1,0,-1,0,-2,2],0)
 console.log(result);