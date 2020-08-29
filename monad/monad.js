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

const validUser = {
    email: 'james@example.com',
    accountDetails: {
        address: {
            street: '123 Fake St',
            city: 'Exampleville',
            province: 'NS',
            postcode: '1234'
        }
    },
    preferences: {}
}

const banners = {
    'AB': '/assets/banners/alberta.jpg',
    'BC': '/assets/banners/british-columbia.jpg',
    'MB': '/assets/banners/manitoba.jpg',
    'NL': '/assets/banners/newfoundland-labrador.jpg',
    'NS': '/assets/banners/nova-scotia.jpg',
    'NT': '/assets/banners/northwest-territories.jpg',
    'ON': '/assets/banners/ontario.jpg',
    'PE': '/assets/banners/prince-edward.jpg',
    'QC': '/assets/banners/quebec.jpg',
    'SK': '/assets/banners/saskatchewan.jpg',
    'YT': '/assets/banners/yukon.jpg',
};

const invalidUser = {}

const getUserBannerImperative = (user, banners) => banners[user.accountDetails.address.province]

const getUserBannerImperativeWithChecking = (user, banners) => {
    if (user !== null) {
        if (user.accountDetails !== undefined) {
            if (user.accountDetails.address !== undefined) {
                return banners[user.accountDetails.address.province];
            }
        }
    }
}

var R = require('ramda'),
    compose = R.compose,
    prop = R.prop,
    path = R.path;



const getProvinceBanner = function (province) {
    return Maybe.of(banners[province])
}

// const r = getUserBanner(banners, validUser)
// console.log(r.inspect())

// const p = getProvinceBanner('test')

function getUserBanner(user) {
    return Maybe.of(user)
        .map(prop('accountDetails'))
        .map(prop('address'))
        .map(prop('province'))
        .chain(getProvinceBanner);
}

const pp = getUserBanner(validUser)
console.debug(pp)

// Provide a default banner with .orElse()
var bannerSrc = getUserBanner(validUser)
    .orElse('/assets/banners/default-banner.jpg');

// Grab the banner element and wrap it in a Maybe too.
var bannerEl = Maybe.of(document.querySelector('.banner > img'));

var applyBannerImperative = function (mBanner, mEl) {
    mEl.__value.src = mBanner.__value;
    return mEl;
};

applyBannerImperative(bannerSrc, bannerEl);

var curry = require('ramda').curry;

var applyBanner = curry(function (el, banner) {
    el.src = banner;
    return el;
});

const rrr = bannerEl.map(applyBanner)

console.log(rrr)
