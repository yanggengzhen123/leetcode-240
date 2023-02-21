// https://leetcode.cn/problems/merge-sorted-array/
// 88. 合并两个有序数组
// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
//  非递减顺序就是递增顺序（从后往前）
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let tail = m + n - 1
    let p1 = m - 1
    let p2 = n - 1
    let curr:number;
    while(p1 > -1 || p2 > -1){
        if(p1 === -1){
            curr = nums2[p2--]
        }else if(p2 === -1){
            curr = nums1[p1--]
        }else if(nums2[p2] > nums1[p1]){
            curr = nums2[p2--]
        }else{
            curr = nums1[p1--]
        }
        nums1[tail--] = curr
    }
};  