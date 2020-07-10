<!--
 * @Author: your name
 * @Date: 2020-07-09 18:55:11
 * @LastEditTime: 2020-07-09 19:09:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH10/README.md
--> 
## Functional Async
### Time as State
1. The most complicated state in your entire application is time
2. When the state of your application changes implicitly in response to events spread out over time, management becomes exponentially more difficult.
3. Coordination of the responses to these actions, each of which has the potential to change the state of your application, that requires so much extra effort

### Promise
1. A Promise represents a single (future) value in a time-independent manner
2. a promise spreads an = assignment operation out over time, but in a trustable (time-independent) fashion.

### Eager vs. Lazy
1 ways to describe whether an operation will finish right away or progress over time.