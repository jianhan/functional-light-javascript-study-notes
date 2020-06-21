/*
 * @Author: your name
 * @Date: 2020-06-21 17:48:50
 * @LastEditTime: 2020-06-21 17:56:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH03/identity.js
 */

const identity = v => v

function identityNamed(v) {
    return v
}

var words = "Now is the time for all... ".split(/\s|\b/);
// ["","Now","is","the","time","for","all","...",""]
const output = words.filter(identity);
// ["Now","is","the","time","for","all","..."]
console.log(output)

// Identity function can also be used as a default value in parameter 
function output(msg, formatFn = identity) {
    msg = formatFn(msg);
    console.log(msg);
}
function upper(txt) {
    return txt.toUpperCase();
}
output("Hello World", upper);
output("Hello World");