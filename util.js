"use strict";

function $query(selectors) {
  return document.querySelector(selectors);
}

function $queryAll(selectors) {
  return document.querySelectorAll(selectors);
}

function getToday() {
  const now = new Date();
  const year = now.getFullYear(); // 获取年份
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 获取月份（注意：月份从0开始，所以要加1）
  const date = now.getDate().toString().padStart(2, '0'); // 获取日期
  return `${year}-${month}-${date}`;
}

/**
 * 每隔 n 个元素就插入一个换行符。
 * 如果 needSpace == true 则插入空格。
 */
function insertLineBreaks(arr, n, needSpace) {
  const result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    count++;
    if (count == n) {
      result.push("\n");
      count = 0;
    } else if (needSpace) {
      result.push(" ");
    }
  }
  return result;
}

/**
 * 检查两个数组是否包含相同的元素（不管顺序）。
 */
function isArraysHaveSameElements(arr1, arr2) {
  if (arr1.length != arr2.length) return false; // 提高效率
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  if (set1.size != set2.size) return false; // 排除重复元素后再次对比长度
  if (set1.isSubsetOf(set2)) return true;
  return false;
}

/**
 * 检查两个数组是否包含相同的元素，且顺序相同。
 */
function isSameArrays(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  return arr1.every((val, index) => val == arr2[index]);
}

// Fisher-Yates 洗牌算法
function secureShuffle(array) {
  const shuffled = array.slice(); // 复制数组以避免修改原数组
  const n = shuffled.length;

  for (let i = n - 1; i > 0; i--) {
    // 使用加密安全的随机数生成器
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const j = randomBuffer[0] % (i + 1);

    // 交换元素
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/*
// 示例
const arr = [1, 2, 3, 4, 5];
const shuffled = secureShuffle(arr);
console.log(shuffled);
*/