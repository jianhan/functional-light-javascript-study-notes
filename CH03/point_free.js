/*
 * @Author: your name
 * @Date: 2020-06-22 21:39:04
 * @LastEditTime: 2020-06-22 21:40:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH03/point_free.js
 */

const double = x => x * 2;

// notice how the function signature for map and double is the same
[1, 2, 3].map(x => double(x))

// hence we can do it this way, -> point free
[1, 2, 3].map(double)



