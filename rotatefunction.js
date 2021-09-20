
var maxRotateFunction = function(nums,) {
  let sum = 0, total = 0, max = 0;
        for(let i = 0; i < nums.length; i++) {
            sum += i * nums[i];
            total += nums[i];
        }
        max = sum;
        //console.log("sum="+sum+" total="+total);
        let n = nums.length;
        for(let i = 1; i < n; i++) {
            let tmp = sum + total - n * nums[n - i];
            max = Math.max(max, tmp);
         //   console.log("tmp="+tmp);
            sum = tmp;
        }
        return max;   
};


/*
Success
Details 
Runtime: 100 ms, faster than 94.74% of JavaScript online submissions for Rotate Function.
Memory Usage: 49.4 MB, less than 87.72% of JavaScript online submissions for Rotate Function.
*/
