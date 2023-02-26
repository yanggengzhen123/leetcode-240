// https://leetcode.cn/problems/maximum-subarray/description/
function maxSubArray(nums: number[]): number {
    let memo:number[] = [nums[0]]
    let max:number = nums[0]
    for(let i = 1;i < nums.length;i++){
        memo[i] = Math.max(nums[i] + memo[i - 1],nums[i])
        max = Math.max(max,memo[i])
    }
    return max
};