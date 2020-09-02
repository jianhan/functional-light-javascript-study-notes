class Maybe {

    constructor(value) {
        this.$value = value;
    }

    static of(value) {
        return new Maybe(value)
    }

    get isNothing() {
        return this.$value === null || this.$value === undefined;
    }

    map(f) {
        return new Maybe(f(this.$value))
    }

    ap(otherMaybe) {
        return otherMaybe.map(this.$value)
    }

    chain(f) {
        return this.map(f).join()
    }

    inspect() {
        return this.isNothing ? 'Nothing' : `Just(${this.$value})`
    }

    join() {
        return this.$value
    }

    orElse(v) {
        return this.isNothing ? Maybe.of(v) : this
    }
}

const double = x => x * 2

const numberFive = Maybe.of(5).chain(double)
console.log(numberFive)