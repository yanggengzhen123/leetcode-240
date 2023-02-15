// https://leetcode.cn/problems/valid-parentheses/submissions/
function isValid(s: string): boolean {
    if(!s.length) return false
    let map = new Map()
    map.set('(',')')
    map.set('[',']')
    map.set('{','}')
    let arr:string[] = []
    for(let i = 0;i < s.length;i++){
        if(map.has(s[i])){
            arr.push(map.get(s[i]))
        }else{
            if(s[i] === arr[arr.length - 1]){
                arr.pop()
            }else{
                return false
            }
        }
    }
    return arr.length ? false : true
};