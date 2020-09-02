const R = require('ramda')

class Either {

    constructor(v) {
        this.$value = v
    }

    static of(v) {
        return new Right(v)
    }
}

class Right extends Either {

    isRight() {
        return true
    }

    isLeft() {
        return false
    }

    map(f) {
        return new Right(f(this.$value))
    }

    chain(f) {
        return f(this.$value)
    }

    join() {
        return this.$value
    }

    static of(v) {
        throw new Error('`of` called on class Right (value) instead of Either (type)');
    }

}

class Left extends Either {
    isLeft() {
        return true
    }

    isRight() {
        return false
    }

    map(f) {
        return this
    }

    chain(f) {
        return this
    }

    join() {
        return this
    }

    static of(v) {
        throw new Error('`of` called on class Left (value) instead of Either (type)');
    }
}


const doubleNumber = x => x * 2

const add2Numbers = (x, y) => x + y

const increment = R.curry(add2Numbers)(1)
const plus10 = R.curry(add2Numbers)(10)

const divideNumber = (x, y) => {
    if (y === 0) {
        throw new Error("y can not be 0")
    }

    return x / y
}


const tryCatch = (...args) => f => {
    try {
        return Right.of(f(...args))
    } catch (e) {
        return Left
    }
}

//  i want to 
// 1. double a number 
// 2. add 10
// 3.100 divide it 
// double
// increment
const process = x => {
    let output = 0;
    output = doubleNumber(x)
    output = add2Numbers(output, 10)
    output = divideNumber(100, output)
    output = doubleNumber(output)
    output = increment(output)
    return output
}

// const result = process(-5)
// console.log(result)

const composedProcess = R.compose(
    increment,
    doubleNumber,
    R.curry(divideNumber)(100),
    plus10,
    doubleNumber,
)

console.log(process(100), composedProcess(100))