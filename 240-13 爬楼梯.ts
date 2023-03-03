// https://leetcode.cn/problems/climbing-stairs/description/
function climbStairs(n: number): number {
    let momo = [1,2]
    // 1 2 3 5
    for(let i = 2;i < n;i++){
        momo[i] = momo[i - 1] + momo[i - 2]
    }
    return momo[n - 1]
};