/*
 * @Author: your name
 * @Date: 2020-06-24 21:58:10
 * @LastEditTime: 2020-06-24 22:38:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH04/abstraction.js
 */

const add = (a, b) => a + b;

// notice how repetition in here as second argument ?
const a = add(1, 1);
const b = add(a, 1);
const c = add(b, 1);

const addCurried = a => b => a + b;

// now create a specialized version from generalized function
// specialized function : inc
// generalized function: add
const inc = add(1);