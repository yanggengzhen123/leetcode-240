// https://leetcode.cn/problems/compare-version-numbers/submissions/403516632/
function compareVersion(version1: string, version2: string): number {
    let arr1:string[] = version1.split('.')
    let arr2:string[] = version2.split('.')
    let maxLength = Math.max(arr1.length,arr2.length)
    for(let i = 0;i < maxLength;i++){
        if(!arr1[i]) arr1.push('0')
        if(!arr2[i]) arr2.push('0')
        if(Number(arr1[i]) > Number(arr2[i])){
            return 1
        }else if(Number(arr1[i]) < Number(arr2[i])){
            return -1
        }
    }
    return 0
};