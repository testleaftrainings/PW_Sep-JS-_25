const nums = [2, 4, 5, 2, 1, 2];
const k = 2;

let count = 0; // Step 1

// Step 2 & 3
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === k) {      // Step 3
    count++;                // Step 3
  }
}

// Step 4 - Output
console.log(count); // Output: 3 