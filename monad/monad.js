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
        return new Maybe(f(value))
    }

    inspect() {
        return this.isNothing ? 'Nothing' : `Just(${this.$value})`
    }
}

const m = Maybe.of(5)
console.log(m.inspect())