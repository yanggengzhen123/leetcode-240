// https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/description/
function exist(board: string[][], word: string): boolean {
    let row = board[0].length
    let col = board.length
    let k = 0 //word索引
    // 第二步
    const dfs = (i:number,j:number,k:number) => {
        if (i < 0 || j < 0 ||i > col - 1 || j > row - 1 || board[i][j] !== word[k]) return false
        if(k === word.length - 1) return true
        let temp = board[i][j]
        // 表示已经标识过
        board[i][j] = '-' // 下次访问到该位置, 肯定返回false
        const res = dfs(i + 1,j,k + 1) || dfs(i - 1,j,k + 1) || dfs(i,j + 1,k + 1) || dfs(i,j - 1,k + 1)
        board[i][j] = temp // 将当前位置元素的值复原
        return res
    }
    // 寻找起始点（第一步）
    for(let i = 0;i < col;i++){
        for(let j = 0;j < row;j++) {
            if(board[i][j] === word[0]){
                // 可能存在多个同一字符
                if (dfs(i,j,k)) return true;
            }
        }
    }
    return false
};