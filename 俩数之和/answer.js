/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

创建一个map来储存他的健值对
遍历整个数组,如果目标值减去当前数组中的值,如果这个值在map中存在就返回数组,如果这个值map不存在就存入map中
因为必定存在有效答案所以无需考虑没有打啊安

function twoSum(nums, target) {
    let numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let othernum = target - nums[i];
        
        if (numMap.has(othernum)) {
            return [numMap.get(othernum), i];
        }
        
        numMap.set(nums[i], i);
    }
    

}