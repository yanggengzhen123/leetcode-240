// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
function lengthOfLongestSubstring(s: string): number {
    // 方法一
    // 滑动窗口（双指针，都是从0开始）
    let set = new Set()
    let l:number = 0
    let r:number = 0
    let maxLength = 0
    for(r; r < s.length;r++){
        if(!set.has(s[r])){
            set.add(s[r])
            maxLength = Math.max(maxLength,set.size)
        } else {
            while(set.has(s[r])){
                set.delete(s[l])
                l++
            }
            set.add(s[r]) //避坑，这里不能add s[l] 举例'dvdf'
        }
    }
    return maxLength

    // 方法二 一个for循环解决，不用双指针(数组存取，用indexof,splice截取)
    let arr:string[] = []
    let max = 0
    for(let i = 0; i < s.length;i++){
        let index = arr.indexOf(s[i])
        if(index != -1){
            arr.splice(0,index + 1)
        }
        arr.push(s[i])
        max = Math.max(arr.length,max)
    }
    return max
};