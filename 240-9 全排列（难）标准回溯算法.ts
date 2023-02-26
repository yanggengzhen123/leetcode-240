// https://leetcode.cn/problems/permutations/description/
function permute(nums: number[]): number[][] {
    // 回溯算法
    let res:number[][] = []
    function dfs(arr){
        if(arr.length === nums.length){
            // 注意，这里是push的不应该是arr，而是arr的拷贝[...arr]
            res.push([...arr])
        }
        for(let i = 0;i < nums.length;i++){
            if(arr.includes(nums[i])){
                // 如果nums[i]存在于arr，则跳出本次循环
                continue
            }
            arr.push(nums[i])
            dfs(arr)
            arr.pop()
        }
    }
    dfs([])
    return res
};