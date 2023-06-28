// Question 8
// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

// TIME COMPLEXITY → O(n)
// SPACE COMPLEXITY → O(1)
function checkMeetingConflict(intervals) {
  // since array is sorted(on starting time) so directly we can traverse on the array
    for (let i = 1; i < intervals.length; i++) {

      if (intervals[i][0] < intervals[i - 1][1]) { // [i] shows the current index [0] shows the starting time of meeting
        // [i-1] shows the previous index of the current index and [1] shows the end meeting time
        
        return false; // if found overlap meeting return false
      }
    }
  
    return true; // // if not found overlap meeting return ture
  }
  
  const Result = checkMeetingConflict([[0, 30], [5, 10], [15, 20]]);  // Try this for true [[0, 30], [35, 70],[72,99]]
  console.log("Possibility of attendign all meeting is  : ",Result); // Output: false
  