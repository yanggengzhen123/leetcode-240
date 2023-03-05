// https://leetcode.cn/problems/longest-palindromic-substring/description/
// 解析
// https://www.bilibili.com/video/BV18J411B7gK/?spm_id_from=333.337.search-card.all.click&vd_source=f75d6767eae14ee4ef4f79821b5268ff
function longestPalindrome(s: string): string {
    if(s.length < 2) return s //边界条件
    // 创建两个变量
    // start最大回文字符串起始点
    let start:number = 0
    // 回文字符最大长度
    let maxLength = 1
    // 中心扩散思想
    const centerExpend = (left,right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if(right - left + 1 > maxLength){
                start = left
                maxLength = right - left + 1
            }
            left--
            right++
        }
    }
    for(let i = 0;i < s.length;i++){
        centerExpend(i - 1,i + 1) // "babad"
        centerExpend(i,i + 1) // "cbbd"
    }
    return s.substring(start,start + maxLength)
};