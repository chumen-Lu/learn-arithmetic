/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

首先需要定一个空字符串来储存最终的结果
然后需要用到遍历,长度使用最大床度
遍历后如果单词存在将每个单词的这个字母拼接起来放在新字符串中

function mergeAlternately(word1,word2){
    let newStr = ''
    let maxlength = Math.max(word1.length,word2.length)


    for (let i=0;i<maxlength;i++){
        if(word1[i]!==undefined){
            newStr+=word1[i]
        }
        if(word2[i]!==undefined){
            newStr+=word2[i]
        }
    }
    return newStr;
}