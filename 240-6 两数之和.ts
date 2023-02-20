// https://leetcode.cn/problems/two-sum/submissions/404173985/
function twoSum(nums: number[], target: number): number[] {
    let map:Map<number,number> = new Map()
    for(let i = 0;i < nums.length;i++){
        if(!map.has(target - nums[i])){
            map.set(nums[i],i)
        }else{
            return [map.get(target - nums[i]) as number,i]
        }
    }
    return []
};