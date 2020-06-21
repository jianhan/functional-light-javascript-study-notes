/*
 * @Author: your name
 * @Date: 2020-06-21 18:29:13
 * @LastEditTime: 2020-06-21 18:29:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH03/constant.js
 */
function constant(v) {
    return function value() {
        return v;
    };
}

const constant = v => () => v;