// https://leetcode.cn/problems/count-and-say/description/?languageTags=javascript
function countAndSay(n: number): string {
    const dfs = (str:string,n: number) => {
        if(n <= 1) return str
        let arr:any[] = []
        let temp = []
        for(let i = 0;i < str.length;i++){
            if(temp.length && temp[0] !== str[i]){
                arr.push(temp.length,temp[0])
                temp = [str[i]]
            }else{
                temp.push(str[i])
            }
        }
        if(temp.length) arr.push(temp.length,temp[0])
        return dfs(arr.join(''),--n)
    }
    return dfs('1', n)
};