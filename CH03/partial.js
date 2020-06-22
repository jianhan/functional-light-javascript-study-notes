/*
 * @Author: your name
 * @Date: 2020-06-22 20:26:36
 * @LastEditTime: 2020-06-22 20:31:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH03/partial.js
 */

const partial = (fn, ...presetArgs) => (...laterArgs) => fn(...presetArgs, ...laterArgs)

const partialRight = (fn, ...presetArgs) => (...laterArgs) => fn(...laterArgs, ...presetArgs)